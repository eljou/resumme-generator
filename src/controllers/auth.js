import { registerUser, loginUser, currentUser } from '../services/auth'
import { dispatchReponse } from '../utils/functions'

export default {
	register: (req, res) => dispatchReponse(res, registerUser)(req.body),
	login: (req, res) => dispatchReponse(res, loginUser)(req.body),
	current: (req, res) => {
		const { name, lastNames, email } = req.user
		return dispatchReponse(res, currentUser)({ name, lastNames, email })
	}
}
