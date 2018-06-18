import { isEmpty } from '../functions'
import { safeFields, validateEmail, validateEmpty } from './validationUtils'

export default fields => {
	const saneFileds = safeFields(['email', 'password'], fields)

	const errors = {}
	let validationMsg
	validationMsg = validateEmail(saneFileds.email, 'Email')
	if (validationMsg) errors.email = validationMsg

	validationMsg = validateEmpty(saneFileds.password, 'Password')
	if (validationMsg) errors.password = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
