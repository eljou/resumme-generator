import axios from 'axios'

export const getAction = (type, payload) => ({ type, payload })

export const setAuthTokenHeader = token => {
	token
		? (axios.defaults.headers.common['Authorization'] = token)
		: delete axios.defaults.headers.common.Authorization
}
