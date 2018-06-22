import React, { Component } from 'react'
import './Login.css'

import TextInputField from '../components/UI/TextInputField'

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {}
	}

	onChangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitHandler = e => {
		e.preventDefault()
		console.log(this.state)
	}

	render() {
		return (
			<section id="login-page">
				<h1>Sign in</h1>
				<form className="login-form" onSubmit={this.onSubmitHandler}>
					<div className="form-fields">
						<TextInputField
							labelText="Email :"
							id="login-email"
							name="email"
							type="email"
							value={this.state.email}
							placeholder="email address..."
							onChange={this.onChangeHandler}
							required
						/>
						<TextInputField
							labelText="Password :"
							id="login-password"
							name="password"
							type="password"
							value={this.state.password}
							placeholder="password address..."
							onChange={this.onChangeHandler}
							required
						/>
						<div className="options-wrapper">
							<div className="remember-me">
								<div className="form-field">
									<input type="checkbox" id="remb" />
									<label htmlFor="remb">Remember me</label>
								</div>
								<a href="/forgot">Forgot password?</a>
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
export default Login
