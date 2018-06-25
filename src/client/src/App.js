import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setAuthTokenHeader } from './util/utilFunctions'
import jwtDecode from 'jwt-decode'
import { logOutUser, setCurrentUser } from './actions/authActions'

import './App.css'
import Store from './store'
import NavBar from './components/navigation/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import Footer from './components/sections/footer/Footer'

// Check for previously logged in user
const token = localStorage.getItem('jwtToken') //eslint-disable-line
if (token) {
	setAuthTokenHeader(token)
	const tokenDecoded = jwtDecode(token)
	Store.dispatch(setCurrentUser(tokenDecoded))

	const currentTime = Date.now / 1000
	if (tokenDecoded.exp < currentTime) {
		Store.dispatch(logOutUser())
		window.location.href = '/login' //eslint-disable-line
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<Router>
					<div>
						<NavBar />
						<main>
							<Route exact path="/" component={Landing} />
							<Route path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
						</main>
						<Footer />
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
