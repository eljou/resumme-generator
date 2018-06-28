import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
)

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)
