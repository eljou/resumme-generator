import config from '../config'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/User'

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = config.jwtSecret

export default passport => {
	passport.use(
		new Strategy(options, async (jwtPayload, done) => {
			try {
				const user = await User.findById(jwtPayload.id)
				return user ? done(null, user) : done(null, false) // Done function 1rst param error, 2nd param data
			} catch (error) {
				console.log(error)
			}
		})
	)
}
