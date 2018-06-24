import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './NavBar.css'

import { logOutUser } from '../../actions/authActions'

const Aux = props => props.children

class NavBar extends Component {
	onLogOutClick = () => {
		console.log('going to log out')
		this.props.logOutUser()
	}

	render() {
		const { isAuthenticated, user } = this.props

		return (
			<header>
				<nav className="navbar">
					<ul className="menu" role="navigation">
						<li className="resumee-brand">
							<Link to="/">Resumme Generator</Link>
						</li>
						{isAuthenticated ? (
							<Aux>
								<li>
									<Link to="/account">{user.name}</Link>
								</li>
								<li>
									<Link to="/" onClick={this.onLogOutClick}>
										Log out
									</Link>
								</li>
							</Aux>
						) : (
							<Aux>
								<li>
									<Link to="/login">Login</Link>
								</li>
								<li>
									<Link to="/register">Register</Link>
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
	isAuthenticated: state.authReducer.isAuthenticated,
	user: state.authReducer.user
})

export default connect(
	mapStateToProps,
	{ logOutUser }
)(NavBar)
