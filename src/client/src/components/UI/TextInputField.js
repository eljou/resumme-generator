import React from 'react'
import PropTypes from 'prop-types'

import './TextInputField.css'

const TextInputField = props => {
	const { labelText, error, ...inputProps } = props

	return (
		<div className="form-field">
			<label htmlFor={inputProps.id}>{labelText}</label>
			<div className="input-field">
				<input {...inputProps} />
				{error ? <p className="error-msg">{error}</p> : null}
			</div>
		</div>
	)
}

TextInputField.propTypes = {
	labelText: PropTypes.string.isRequired,
	error: PropTypes.string
}

export default TextInputField
