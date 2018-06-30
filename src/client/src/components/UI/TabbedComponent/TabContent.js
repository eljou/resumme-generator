import React from 'react'
import PropTypes from 'prop-types'

import './TabContent.css'

const TabContent = ({ id, active, children, label }) => (
	<div id={`${id}-content`} className={`tab ${active}`}>
		<h1>{label.text}</h1>
		<hr />
		{children}
	</div>
)

TabContent.propTypes = {
	id: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	children: PropTypes.isRequired
}

export default TabContent
