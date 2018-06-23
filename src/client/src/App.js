import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Store from './store'
import NavBar from './components/navigation/NavBar'
import Login from './pages/Login'
// import Register from './pages/Register'
import Profile from './containers/Profile'
import Footer from './components/sections/footer/Footer'

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<Router>
					<div>
						<NavBar />
						<main>
							<Route exact path="/" component={Profile} />
							<Route path="/login" component={Login} />
							{/* <Route exact path="/register" component={Register} /> */}
						</main>
						<Footer />
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
