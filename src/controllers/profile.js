import { saveProfile, getProfile, deleteProfile } from '../services/profile'
import { dispatchReponse } from '../utils/functions'

export default {
	save: (req, res) => dispatchReponse(res, saveProfile)(req.user, req.body),
	get: (req, res) => dispatchReponse(res, getProfile)(req.user),
	delete: (req, res) => dispatchReponse(res, deleteProfile)(req.user)
}
