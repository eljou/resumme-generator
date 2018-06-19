import { Router } from 'express'
import passport from 'passport'
import Profile from '../controllers/profile'
import { safeRoute } from '../utils/functions'

const profileRouter = Router()

profileRouter.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	safeRoute(Profile.save)
)
// profileRouter.get('', safeRoute())
// profileRouter.put('', safeRoute())

export default profileRouter
