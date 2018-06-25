import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { getAction, setAuthTokenHeader } from '../util/utilFunctions'
import { SET_ERRORS, SET_CURRENT_USER } from './actionTypes'

export const registerUser = (userData, history) => async dispatch => {
	try {
		await axios.post('/api/users/register', userData)
		history.push('/login')
	} catch (error) {
		console.log(error)
		dispatch(getAction(SET_ERRORS, error.response.data))
	}
}

export const loginUser = userData => async dispatch => {
	try {
		const response = await axios.post('/api/users/login', userData)
		console.log(response)
		const { token } = response.data

		/* eslint-disable */
		localStorage.setItem('jwtToken', token)
		/* eslint-enable */
		setAuthTokenHeader(token)

		const tokenDecoded = jwtDecode(token)
		dispatch(getAction(SET_CURRENT_USER, tokenDecoded))
	} catch (error) {
		console.log(error)
		dispatch(getAction(SET_ERRORS, error.response.data))
	}
}

export const logOutUser = () => dispatch => {
	localStorage.removeItem('jwtToken') //eslint-disable-line
	setAuthTokenHeader(false)
	dispatch(setCurrentUser({}))
}

export const setCurrentUser = user => getAction(SET_CURRENT_USER, user)
