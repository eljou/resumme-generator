import { saveProfile } from '../services/profile'
import { dispatchReponse } from '../utils/functions'

export default {
	save: (req, res) => dispatchReponse(res, saveProfile)(req.user, req.body)
	// update: (req, res) => ,
	// get: (req, res) =>
}
