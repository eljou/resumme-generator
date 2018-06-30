import React from 'react'
import PropTypes from 'prop-types'

import './TextAreaInputField.css'

const TextAreaInputField = props => {
	const { labelText, error, ...textAreaProps } = props

	return (
		<div className="form-field">
			<label htmlFor={textAreaProps.id}>{labelText}</label>
			<div className="input-field">
				<textarea {...textAreaProps} />
				{error ? <p className="error-msg">{error}</p> : null}
			</div>
		</div>
	)
}

TextAreaInputField.propTypes = {
	labelText: PropTypes.string.isRequired,
	error: PropTypes.string
}

export default TextAreaInputField
