import { registerUser, loginUser } from '../services/auth'
import { dispatchReponse } from '../utils/functions'

export default {
	register: (req, res) => dispatchReponse(res, registerUser)(req.body),
	login: (req, res) => dispatchReponse(res, loginUser)(req.body)
}
