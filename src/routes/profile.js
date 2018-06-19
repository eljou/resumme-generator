import { Router } from 'express'
import passport from 'passport'
import Profile from '../controllers/profile'
import { safeRoute } from '../utils/functions'

const profileRouter = Router()

// @route   POST api/profile
// @desc    Create profile basics information
// @access  Private
profileRouter.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.save)
)

// @route   GET api/profile
// @desc    Get profile basics information
// @access  Private
profileRouter.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.get)
)

// @route   DELETE api/profile
// @desc    Delete profile information
// @access  Private
profileRouter.delete(
	'/',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.delete)
)

// @route   POST api/profile/experience
// @desc    Add experience status to profile
// @access  Private
profileRouter.post(
	'/experience',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.addExperience)
)

// @route   DELETE api/profile/experience/:id
// @desc    Remove experience status from profile
// @access  Private
profileRouter.delete(
	'/experience/:id',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.removeExperience)
)

// @route   POST api/profile/education
// @desc    Add education status to profile
// @access  Private
profileRouter.post(
	'/education',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.addEducation)
)

// @route   DELETE api/profile/education/:id
// @desc    Remove education status from profile
// @access  Private
profileRouter.delete(
	'/education/:id',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.removeEducation)
)

// @route   POST api/profile/socials
// @desc    Add social network status to profile
// @access  Private
profileRouter.post(
	'/socials',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.addSocialNetwork)
)

// @route   DELETE api/profile/socials/:id
// @desc    Remove socials network field from profile
// @access  Private
profileRouter.delete(
	'/socials/:id',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.removeSocialNetwork)
)

export default profileRouter
