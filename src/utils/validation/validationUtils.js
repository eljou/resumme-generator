import { isEmpty } from '../functions'
import Validator from 'validator'

export const safeFields = (typesOfFields, obj) => {
	const result = {}
	typesOfFields.forEach(field => {
		result[field] = isEmpty(obj[field]) ? '' : obj[field]
	})
	return result
}

export const validateSequentialy = (validators, field, label) => {
	let errorFunc = validators.find(
		validatorFunc => validatorFunc(field, label) !== null
	)
	return errorFunc ? errorFunc(field, label) : null
}

export const validateRange = (min, max) => (str, label) =>
	!Validator.isLength(str, { min, max })
		? `${label} must be between ${min} and ${max} characters`
		: null

export const validateEquals = val1 => (val2, label) =>
	!Validator.equals(val1, val2) ? `${label} must match` : null

export const validateEmail = (str, label) =>
	!Validator.isEmail(str) ? `${label} is invalid` : null

export const validateURL = (str, label) =>
	!Validator.isURL(str) ? `${label} is invalid` : null

export const validateEmpty = (str, label) =>
	!Validator.isEmpty(str) ? null : `${label} field is required`
