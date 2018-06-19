import { SUCCESS, CREATED, BAD_REQUEST, NOT_FOUND } from '../utils/statusCodes'
import { responseObject } from '../utils/functions'
import Profile from '../models/Profile'
import User from '../models/User'
import validateProfileInput from '../utils/validation/profileData'

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
