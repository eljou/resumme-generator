import React, { Component } from 'react'
import './BasicInfo.css'

import TextInputField from '../UI/TextInputField'
import TextAreaInputField from '../UI/TextAreaInputField'

class BasicInfo extends Component {
	state = {
		resumme: '',
		status: '',
		phone: '',
		location: '',
		company: '',
		website: 'http://',
		errors: {}
	}

	onChangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		const { errors } = this.state

		return (
			<div id="create-profile-basics">
				<form>
					<TextAreaInputField
						labelText="Resumme :"
						id="profile-resumme"
						name="resumme"
						value={this.state.resumme}
						placeholder="Write a small resumme about you..."
						onChange={this.onChangeHandler}
						error={errors.resumme}
						required
					/>
					<TextInputField
						labelText="Phone :"
						id="profile-phone"
						name="phone"
						type="text"
						value={this.state.phone}
						placeholder="Phone..."
						onChange={this.onChangeHandler}
						error={errors.phone}
					/>
					<TextInputField
						labelText="Location :"
						id="profile-location"
						name="location"
						type="text"
						value={this.state.location}
						placeholder="Location..."
						onChange={this.onChangeHandler}
						error={errors.location}
					/>
					<TextInputField
						labelText="Company :"
						id="profile-company"
						name="company"
						type="text"
						value={this.state.company}
						placeholder="Company..."
						onChange={this.onChangeHandler}
						error={errors.company}
					/>
					<TextInputField
						labelText="Website :"
						id="profile-website"
						name="website"
						type="url"
						value={this.state.website}
						placeholder="Website..."
						onChange={this.onChangeHandler}
						error={errors.website}
					/>
					<div className="options-wrapper">
						<button className="btn btn-success" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default BasicInfo
