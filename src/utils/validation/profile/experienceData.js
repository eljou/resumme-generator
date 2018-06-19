import { isEmpty } from '../../functions'
import {
	safeFields,
	validateSequentialy,
	validateEmpty,
	validateRange
} from '../validationUtils'

export default fields => {
	const saneFields = safeFields(['title', 'company', 'from'], fields)

	const errors = {}
	let validationMsg
	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(2, 30)],
		saneFields.title,
		'Title'
	)
	if (validationMsg) errors.title = validationMsg

	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(2, 30)],
		saneFields.company,
		'Company'
	)
	if (validationMsg) errors.company = validationMsg

	validationMsg = validateEmpty(saneFields.from, 'From')
	if (validationMsg) errors.from = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
