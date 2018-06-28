import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Register.css'
import TextInputField from '../components/UI/TextInputField'
import { registerUser } from '../actions/authActions'

class Register extends Component {
	state = {
		name: '',
		lastNames: '',
		email: '',
		password: '',
		passwordConfirm: '',
		errors: {}
	}

	componentDidMount() {
		if (this.props.isAuthenticated) {
			this.props.history.push('/')
		}
	}

	componentWillReceiveProps = nextProps => {
		if (nextProps.isAuthenticated) {
			this.props.history.push('/')
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

		this.props.registerUser(
			{
				name: this.state.name,
				lastNames: this.state.lastNames,
				email: this.state.email,
				password: this.state.password,
				passwordConfirm: this.state.passwordConfirm
			},
			this.props.history
		)
	}

	// TODO: Missing required fields
	render() {
		const { errors } = this.state
		const errorMsg = <p>{errors.generalError}</p>
		return (
			<section id="register-page">
				<h1>Register</h1>
				<form className="register-form" onSubmit={this.onSubmitHandler}>
					<div className="general-errors">{errorMsg}</div>
					<div className="form-fields">
						<TextInputField
							labelText="Name :"
							id="register-name"
							name="name"
							type="text"
							value={this.state.name}
							placeholder="Name..."
							onChange={this.onChangeHandler}
							error={errors.name}
							required
						/>
						<TextInputField
							labelText="Last Names :"
							id="register-lastNames"
							name="lastNames"
							type="text"
							value={this.state.lastNames}
							placeholder="Last names..."
							onChange={this.onChangeHandler}
							error={errors.lastNames}
						/>
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
						<TextInputField
							labelText="Confirm Password :"
							id="login-passwordConfirm"
							name="passwordConfirm"
							type="password"
							value={this.state.passwordConfirm}
							placeholder="Password confirmation..."
							onChange={this.onChangeHandler}
							error={errors.passwordConfirm}
							required
						/>
						<div className="options-wrapper">
							<button className="btn btn-success" type="submit">
								Register
							</button>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

Register.propTypes = {
	history: PropTypes.object.isRequired,
	registerUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	errors: state.auth.errors
})

export default connect(
	mapStateToProps,
	{ registerUser }
)(Register)
