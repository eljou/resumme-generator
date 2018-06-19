import {
	saveProfile,
	getProfile,
	deleteProfile,
	addExperience,
	addEducation,
	addSocialNetwork,
	removeExperience,
	removeEducation,
	removeSocialNetwork
} from '../services/profile'
import { dispatchReponse } from '../utils/functions'

export default {
	save: (req, res) => dispatchReponse(res, saveProfile)(req.user, req.body),
	get: (req, res) => dispatchReponse(res, getProfile)(req.user),
	delete: (req, res) => dispatchReponse(res, deleteProfile)(req.user),
	addExperience: (req, res) =>
		dispatchReponse(res, addExperience)(req.user, req.body),
	removeExperience: (req, res) =>
		dispatchReponse(res, removeExperience)(req.user, req.params.id),
	addEducation: (req, res) =>
		dispatchReponse(res, addEducation)(req.user, req.body),
	removeEducation: (req, res) =>
		dispatchReponse(res, removeEducation)(req.user, req.params.id),
	addSocialNetwork: (req, res) =>
		dispatchReponse(res, addSocialNetwork)(req.user, req.body),
	removeSocialNetwork: (req, res) =>
		dispatchReponse(res, removeSocialNetwork)(req.user, req.params.id)
}
