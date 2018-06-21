import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => (
	<header>
		<nav className="navbar">
			<ul className="menu" role="navigation">
				<li className="resumee-brand">
					<Link to="/">Resumme Generator</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
			</ul>
		</nav>
	</header>
)

export default NavBar
