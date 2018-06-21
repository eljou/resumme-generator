import React from 'react'
import PropTypes from 'prop-types'
import './KeyValue.css'

const KeyValue = ({ options }) => {
	const { htmlClass, label, data, icon } = options
	const iconTag = icon !== undefined ? <i className={`fas fa-${icon}`} /> : null
	const labelTag =
		label !== undefined ? (
			<small>
				{iconTag} {label}{' '}
			</small>
		) : null
	return (
		<div className={`tag ${htmlClass}`}>
			{labelTag}
			<p>{data}</p>
		</div>
	)
}

KeyValue.propTypes = {
	options: PropTypes.object.isRequired
}

export default KeyValue
