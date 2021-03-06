import { SERVER_ERROR } from '../utils/statusCodes'
import authRouter from './auth'
import profileRouter from './profile'

const setRoutes = app => {
	app.get('/', (req, res) => {
		res.json({ message: 'Home page' })
	})

	app.use('/api/users', authRouter)
	app.use('/api/profile', profileRouter)

	// Fallback error handler middleware
	/* eslint-disable */
	app.use((err, req, res, next) => {
		console.log(err)
		return res.status(SERVER_ERROR).json({ msg: 'Internal Server Error...' })
	})
	/* eslint-enable */
}

export default setRoutes
