import { Router } from 'express'
import passport from 'passport'
import Auth from '../controllers/auth'
import { safeRoute } from '../utils/functions'

const usersRouter = Router()

// @route   GET api/register
// @desc    Register users route
// @access  Public
usersRouter.post('/register', safeRoute(Auth.register))

// @route   GET api/login
// @desc    Login users route
// @access  Public
usersRouter.post('/login', safeRoute(Auth.login))

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
usersRouter.get(
	'/current',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Auth.current)
)

export default usersRouter
