import { isEmpty } from '../functions'
import {
	safeFields,
	validateSequentialy,
	validateRange,
	validateEmail,
	validateEmpty,
	validateEquals
} from './validationUtils'

export default fields => {
	const saneFields = safeFields(
		['name', 'lastNames', 'email', 'password', 'passwordConfirm'],
		fields
	)

	const errors = {}
	let validationMsg
	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(2, 30)],
		saneFields.name,
		'Name'
	)
	if (validationMsg) errors.name = validationMsg

	validationMsg = validateSequentialy(
		[validateEmpty, validateEmail],
		saneFields.email,
		'Email'
	)
	if (validationMsg) errors.email = validationMsg

	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(6, 30)],
		saneFields.password,
		'Password'
	)
	if (validationMsg) errors.password = validationMsg

	validationMsg = validateSequentialy(
		[validateEmpty, validateEquals(saneFields.password)],
		saneFields.passwordConfirm,
		'Password Confirmation'
	)
	if (validationMsg) errors.passwordConfirm = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
