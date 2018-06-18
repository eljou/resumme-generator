import { isEmpty } from '../functions'
import {
	safeFields,
	validateRange,
	validateEmail,
	validateEmpty,
	validateEquals
} from './validationUtils'

export default fields => {
	const saneFileds = safeFields(
		['name', 'lastNames', 'email', 'password', 'passwordConfirm'],
		fields
	)

	const errors = {}
	let validationMsg
	validationMsg = validateEmpty(saneFileds.name, 'Name')
	if (!validationMsg)
		validationMsg = validateRange(2, 30)(saneFileds.name, 'Name')
	if (validationMsg) errors.name = validationMsg

	validationMsg = validateEmpty(saneFileds.lastNames, 'Last Names')
	if (!validationMsg)
		validationMsg = validateRange(2, 30)(saneFileds.lastNames, 'Last Names')
	if (validationMsg) errors.lastNames = validationMsg

	validationMsg = validateEmail(saneFileds.email, 'Email')
	if (validationMsg) errors.email = validationMsg

	validationMsg = validateEmpty(saneFileds.password, 'Password')
	if (!validationMsg)
		validationMsg = validateRange(6, 30)(saneFileds.password, 'Password')
	if (validationMsg) errors.password = validationMsg

	validationMsg = validateEmpty(
		saneFileds.passwordConfirm,
		'Password Confirmation'
	)
	if (!validationMsg)
		validationMsg = validateEquals(
			saneFileds.password,
			saneFileds.passwordConfirm
		)('Passwords')
	if (validationMsg) errors.passwordConfirm = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
