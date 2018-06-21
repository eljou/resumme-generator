import React from 'react'
import PropTypes from 'prop-types'

import './TextInputField.css'

const TextInputField = props => {
	const { labelText, ...inputProps } = props

	return (
		<div className="form-field">
			<label htmlFor={inputProps.id}>{labelText}</label>
			<input {...inputProps} />
		</div>
	)
}

TextInputField.propTypes = {
	labelText: PropTypes.string.isRequired
}

export default TextInputField
