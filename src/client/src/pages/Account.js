import React, { Component } from 'react'
import TabbedComponent from '../components/UI/TabbedComponent/TabbedComponent'
import TabContent from '../components/UI/TabbedComponent/TabContent'

import './Account.css'
import BasicInfo from '../components/create-profile/BasicInfo'

class Account extends Component {
	render() {
		const tabsOptions = [
			{ text: 'Profile Basics', icon: 'fa-user-circle' },
			{ text: 'Skills', icon: 'fa-toolbox' },
			{ text: 'Work Experience', icon: 'fa-building' },
			{ text: 'Education', icon: 'fa-graduation-cap' }
		]

		return (
			<div id="account-page">
				<form onSubmit={() => console.log('submitting')}>
					<div className="page-actions">
						<button className="btn btn-success" type="submit">
							Submit
						</button>
						<button className="btn">Reset</button>
					</div>
					<TabbedComponent>
						<TabContent label={tabsOptions[0]}>
							<BasicInfo />
						</TabContent>
						<TabContent label={tabsOptions[1]}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Deleniti sapiente earum modi nihil iure temporibus amet,
								architecto, et id perspiciatis maiores error quos laborum, dicta
								cum nostrum optio soluta quam!
							</p>
						</TabContent>
						<TabContent label={tabsOptions[2]}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Deleniti sapiente earum modi nihil iure temporibus amet,
								architecto, et id perspiciatis maiores error quos laborum, dicta
								cum nostrum optio soluta quam!
							</p>
						</TabContent>
						<TabContent label={tabsOptions[3]}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Deleniti sapiente earum modi nihil iure temporibus amet,
								architecto, et id perspiciatis maiores error quos laborum, dicta
								cum nostrum optio soluta quam!
							</p>
						</TabContent>
					</TabbedComponent>
				</form>
			</div>
		)
	}
}

export default Account
