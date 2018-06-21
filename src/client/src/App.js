import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navigation/NavBar'
import Login from './pages/Login'
// import Register from './pages/Register'
import Profile from './containers/Profile'
import Footer from './components/sections/footer/Footer'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<NavBar />
					<main>
						<Route exact path="/" component={Profile} />
						<Route exact path="/login" component={Login} />
						{/* <Route exact path="/register" component={Register} /> */}
					</main>
					<Footer />
				</div>
			</Router>
		)
	}
}

export default App
