import { isEmpty } from '../functions'
import {
	safeFields,
	validateSequentialy,
	validateEmail,
	validateEmpty
} from './validationUtils'

export default fields => {
	const saneFields = safeFields(['email', 'password'], fields)

	const errors = {}
	let validationMsg
	validationMsg = validateSequentialy(
		[validateEmpty, validateEmail],
		saneFields.email,
		'Email'
	)
	if (validationMsg) errors.email = validationMsg

	validationMsg = validateEmpty(saneFields.password, 'Password')
	if (validationMsg) errors.password = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
