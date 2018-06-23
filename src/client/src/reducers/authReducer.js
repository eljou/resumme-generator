import { SET_CURRENT_USER, SET_ERRORS } from '../actions/actionTypes'

const initialState = {
	isAuthenticated: false,
	user: {},
	errors: {
		generalError: ''
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			}
		case SET_ERRORS:
			return {
				...state,
				errors: {
					...action.payload
				}
			}
		default:
			return state
	}
}
