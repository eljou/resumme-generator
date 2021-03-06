import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Login.css'

import TextInputField from '../components/UI/TextInputField'
import { loginUser } from '../actions/authActions'

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {}
	}

	componentWillMount = () => {
		if (this.props.isAuthenticated) {
			this.props.history.push('/profile')
		}
	}

	componentWillReceiveProps = nextProps => {
		if (nextProps.isAuthenticated) {
			this.props.history.push('/profile')
		}

		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}

	onChangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitHandler = e => {
		e.preventDefault()
		const { email, password } = this.state

		this.props.loginUser({ email, password })
	}

	render() {
		const { errors } = this.state
		const errorMsg =
			errors.generalError === 'UNF' ? (
				<p>
					User not found please <Link to="/register">Register</Link>
				</p>
			) : (
				<p>{errors.generalError}</p>
			)
		return (
			<section id="login-page">
				<h1>Log In</h1>
				<form className="login-form" onSubmit={this.onSubmitHandler}>
					<div className="general-errors">{errorMsg}</div>
					<div className="form-fields">
						<TextInputField
							labelText="Email :"
							id="login-email"
							name="email"
							type="email"
							value={this.state.email}
							placeholder="Email address..."
							onChange={this.onChangeHandler}
							error={errors.email}
							required
						/>
						<TextInputField
							labelText="Password :"
							id="login-password"
							name="password"
							type="password"
							value={this.state.password}
							placeholder="Password..."
							onChange={this.onChangeHandler}
							error={errors.password}
							required
						/>
						<div className="options-wrapper">
							<div className="remember-me">
								<div className="form-field">
									<input type="checkbox" id="remb" />
									<label htmlFor="remb">Remember me</label>
								</div>
								<Link to="/forgot">Forgot password?</Link>
							</div>
							<button className="btn btn-success" type="submit">
								Log In
							</button>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

Login.propTypes = {
	history: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	errors: state.auth.errors
})

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login)
