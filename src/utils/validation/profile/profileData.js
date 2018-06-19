import { isEmpty } from '../../functions'
import {
	safeFields,
	validateSequentialy,
	validateEmpty,
	validateRange
} from '../validationUtils'

export default fields => {
	const saneFields = safeFields(['resumme'], fields)

	const errors = {}
	let validationMsg
	validationMsg = validateSequentialy(
		[validateEmpty, validateRange(10, 250)],
		saneFields.resumme,
		'Resumme'
	)
	if (validationMsg) errors.resumme = validationMsg

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
