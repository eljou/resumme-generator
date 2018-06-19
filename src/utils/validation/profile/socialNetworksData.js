import Validator from 'validator'
import { isEmpty } from '../../functions'
import {
	safeFields,
	validateSequentialy,
	validateEmpty,
	validateURL
} from '../validationUtils'

export default fields => {
	const saneFields = safeFields(['network', 'profileURL'], fields)

	const errors = {}
	let validationMsg
	validationMsg = validateEmpty(saneFields.network, 'Network')
	if (validationMsg) errors.network = validationMsg

	validationMsg = validateSequentialy(
		[validateEmpty, validateURL],
		saneFields.profileURL,
		'Profile URL'
	)
	if (validationMsg) errors.profileURL = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
