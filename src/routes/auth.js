import { Router } from 'express'
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

export default usersRouter
