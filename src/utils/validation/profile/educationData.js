import { isEmpty } from '../../functions'
import {
	safeFields,
	validateSequentialy,
	validateEmpty,
	validateRange
} from '../validationUtils'

export default fields => {
	const saneFields = safeFields(['school', 'degree', 'from'], fields)

	const errors = {}
	let validationMsg
	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(2, 30)],
		saneFields.school,
		'School'
	)
	if (validationMsg) errors.school = validationMsg

	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(2, 30)],
		saneFields.degree,
		'Degree'
	)
	if (validationMsg) errors.degree = validationMsg

	validationMsg = validateEmpty(saneFields.from, 'From')
	if (validationMsg) errors.from = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
