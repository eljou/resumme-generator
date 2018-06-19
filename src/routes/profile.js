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

export default profileRouter
