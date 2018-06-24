import React, { Component } from 'react'

import './Register.css'
import TextInputField from '../components/UI/TextInputField'

class Register extends Component {
	state = {
		name: '',
		lastNames: '',
		email: '',
		password: '',
		passwordConfirm: '',
		avatar: '',
		errors: {}
	}

	onChangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitHandler = e => {
		e.preventDefault()
		// const { name, lastNames, email, password, passwordConfirm, avatar } = this.state

		console.log(this.state)
	}

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

export default Register
