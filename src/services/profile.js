import { SUCCESS, CREATED, BAD_REQUEST, NOT_FOUND } from '../utils/statusCodes'
import { responseObject } from '../utils/functions'
import Profile from '../models/Profile'
import User from '../models/User'
import validateProfileInput from '../utils/validation/profile/profileData'
import validateExperienceInput from '../utils/validation/profile/experienceData'
import validateEducationInput from '../utils/validation/profile/educationData'
import validateSocialNetworksInput from '../utils/validation/profile/socialNetworksData'

export const saveProfile = async (user, profileData) => {
	const { errors, isValid } = validateProfileInput(profileData)
	if (!isValid) {
		return responseObject(BAD_REQUEST, errors)
	}

	const profileFields = {}
	profileFields.user = user._id
	profileFields.resumme = profileData.resumme
	if (profileData.status) profileFields.status = profileData.status
	if (profileData.phone) profileFields.phone = profileData.phone
	if (profileData.location) profileFields.location = profileData.location
	if (profileData.company) profileFields.company = profileData.company
	if (profileData.website) profileFields.website = profileData.website

	if (await Profile.findOne({ user: user._id })) {
		const updatedProfile = await Profile.findOneAndUpdate(
			{ user: user._id },
			{ $set: profileFields },
			{ new: true }
		)
		return responseObject(SUCCESS, updatedProfile)
	}

	const newProfile = await new Profile(profileFields).save()
	return responseObject(CREATED, newProfile)
}

export const getProfile = async user => {
	const profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(NOT_FOUND, 'Profile not found')
	}
	return responseObject(SUCCESS, profile)
}

export const deleteProfile = async user => {
	const profile = await Profile.findOneAndRemove({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}

	const userToRemove = await User.findOneAndRemove({ _id: profile.user })
	return responseObject(SUCCESS, { userToRemove, profile })
}

export const addExperience = async (user, newExperience) => {
	const { errors, isValid } = validateExperienceInput(newExperience)
	if (!isValid) {
		return responseObject(BAD_REQUEST, errors)
	}

	let profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}

	if (profile.experience.find(item => item.company === newExperience.company)) {
		return responseObject(BAD_REQUEST, 'Company profile already exists')
	}

	profile.experience.unshift(newExperience)
	profile = await profile.save()
	return responseObject(CREATED, profile)
}
export const removeExperience = async (user, expId) => {
	let profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}

	const indexToRemove = profile.experience.indexOf(
		profile.experience.find(item => item._id.toString() === expId)
	)

	profile.experience.splice(indexToRemove, 1)
	profile = await profile.save()
	return responseObject(SUCCESS, profile)
}

export const addEducation = async (user, newEducation) => {
	const { errors, isValid } = validateEducationInput(newEducation)
	if (!isValid) {
		return responseObject(BAD_REQUEST, errors)
	}

	let profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}

	if (profile.education.find(item => item.school === newEducation.school)) {
		return responseObject(BAD_REQUEST, 'School profile already exists')
	}

	profile.education.unshift(newEducation)
	profile = await profile.save()
	return responseObject(CREATED, profile)
}
export const removeEducation = async (user, eduId) => {
	let profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}
	const indexToRemove = profile.education.indexOf(
		profile.education.find(item => item._id.toString() === eduId)
	)
	profile.education.splice(indexToRemove, 1)
	profile = await profile.save()
	return responseObject(SUCCESS, profile)
}

export const addSocialNetwork = async (user, newSocialNetwork) => {
	const { errors, isValid } = validateSocialNetworksInput(newSocialNetwork)
	if (!isValid) {
		return responseObject(BAD_REQUEST, errors)
	}

	let profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}

	if (
		profile.socialNetworks.find(
			item => item.network === newSocialNetwork.network
		)
	) {
		return responseObject(BAD_REQUEST, 'Social Network Profile already exists')
	}

	profile.socialNetworks.push(newSocialNetwork)
	profile = await profile.save()
	return responseObject(CREATED, profile)
}
export const removeSocialNetwork = async (user, networkId) => {
	let profile = await Profile.findOne({ user: user._id })
	if (!profile) {
		return responseObject(BAD_REQUEST, 'Profile not found')
	}
	const indexToRemove = profile.socialNetworks.indexOf(
		profile.socialNetworks.find(item => item._id.toString() === networkId)
	)
	profile.socialNetworks.splice(indexToRemove, 1)
	profile = await profile.save()
	return responseObject(SUCCESS, profile)
}
