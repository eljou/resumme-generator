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
				<form className="login-form" onSubmit={this.onSubmitHandler}>
					<h1>Please Login to handle your CV</h1>
					<hr />
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
					<button type="submit">Log In</button>
				</form>
			</section>
		)
	}
}
export default Login
