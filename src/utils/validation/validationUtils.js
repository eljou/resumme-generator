import { isEmpty } from '../functions'
import Validator from 'validator'

export const safeFields = (typesOfFields, obj) => {
	const result = {}
	typesOfFields.forEach(field => {
		result[field] = isEmpty(obj[field]) ? '' : obj[field]
	})
	return result
}

export const validateRange = (min, max) => (str, label) =>
	!Validator.isLength(str, { min, max })
		? `${label} must be between ${min} and ${max} characters`
		: null

export const validateEquals = (val1, val2) => label =>
	!Validator.equals(val1, val2) ? `${label} must match` : null

export const validateEmpty = (str, label) =>
	Validator.isEmpty(str) ? `${label} field is required` : null

export const validateEmail = (str, label) => {
	const emptyFieldErrorMsg = validateEmpty(str, label)
	if (!emptyFieldErrorMsg) {
		return !Validator.isEmail(str) ? `${label} is invalid` : null
	}
	return emptyFieldErrorMsg
}
