import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TabbedComponent.css'

class TabbedComponent extends Component {
	state = {
		activeLink: 0
	}

	renderTabs = () =>
		React.Children.map(this.props.children, (child, index) =>
			React.cloneElement(child, {
				id: index,
				active: this.state.activeLink === index ? 'active' : ''
			})
		)

	renderTabButtons = () =>
		this.props.children.map((child, index) => (
			<button
				key={`${index}-link`}
				id={`${index}-link`}
				className={`btn ${index === this.state.activeLink ? 'active' : ''}`}
				onClick={this.handleChangeTab}
			>
				{child.props.label.icon ? (
					<i className={`fas ${child.props.label.icon} fa-lg`} />
				) : null}
				{child.props.label.text}
			</button>
		))

	handleChangeTab = e => {
		const activeLink = +e.target.id.split('-')[0]
		this.setState({ activeLink })
	}

	render() {
		return (
			<section id="tabs-content">
				<div className="links-wrapper">
					<div className="tab-links">{this.renderTabButtons()}</div>
				</div>
				<div className="tab-content">{this.renderTabs()}</div>
			</section>
		)
	}
}

TabbedComponent.propTypes = {
	children: PropTypes.array.isRequired
}

export default TabbedComponent
