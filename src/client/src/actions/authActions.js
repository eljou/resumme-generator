import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { getAction } from '../util/utilFunctions'
import { SET_ERRORS, SET_CURRENT_USER } from './actionTypes'

const setAuthToken = token => {
	token
		? (axios.defaults.headers.common['Authorization'] = token)
		: delete axios.defaults.headers.common.Authorization
}

export const loginUser = userData => async dispatch => {
	try {
		const response = await axios.post('/api/users/login', userData)
		console.log(response)
		const { token } = response.data

		/* eslint-disable */
		localStorage.setItem('jwtToken', token)
		/* eslint-enable */
		setAuthToken(token)

		const tokenDecoded = jwtDecode(token)
		dispatch(getAction(SET_CURRENT_USER, tokenDecoded))
	} catch (error) {
		console.log(error)
		dispatch(getAction(SET_ERRORS, error.response.data))
	}
}
