import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './NavBar.css'

import { logOutUser } from '../../actions/authActions'

const Aux = props => props.children

class NavBar extends Component {
	onLogOutClick = () => {
		this.props.logOutUser()
	}

	render() {
		const { isAuthenticated, user } = this.props

		return (
			<header>
				<nav className="navbar">
					<ul className="menu" role="navigation">
						<li className="resumee-brand">
							<NavLink to="/" exact>
								Resumme Generator
							</NavLink>
						</li>
						{isAuthenticated ? (
							<Aux>
								<li>
									<NavLink to="/account">{user.name}</NavLink>
								</li>
								<li>
									<NavLink to="/" onClick={this.onLogOutClick}>
										Log out
									</NavLink>
								</li>
							</Aux>
						) : (
							<Aux>
								<li>
									<NavLink to="/login">Login</NavLink>
								</li>
								<li>
									<NavLink to="/register">Register</NavLink>
								</li>
							</Aux>
						)}
					</ul>
				</nav>
			</header>
		)
	}
}

NavBar.propTypes = {
	logOutUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
})

export default withRouter(
	connect(
		mapStateToProps,
		{ logOutUser }
	)(NavBar)
)
