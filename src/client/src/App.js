import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { setAuthTokenHeader } from './util/utilFunctions'
import jwtDecode from 'jwt-decode'
import { logOutUser, setCurrentUser } from './actions/authActions'
import PrivateRoute from './components/common/PrivateRoute'

import './App.css'
import Store from './store'
import NavBar from './components/navigation/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Account from './pages/Account'
import Footer from './components/sections/footer/Footer'
import NotFound from './pages/NotFound'

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
					<div id="app">
						<NavBar />
						<main className="container">
							<Switch>
								<Route exact path="/" component={Landing} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
								<PrivateRoute path="/profile" component={Profile} />
								<PrivateRoute path="/account" component={Account} />
								<Route path="*" component={NotFound} />
							</Switch>
						</main>
						<Footer />
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
