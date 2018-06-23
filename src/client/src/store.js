import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middlewares = [thunk]

const Store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middlewares),
		/* eslint-disable */
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		/* eslint-enable */
	)
) //combined_reducers, initial_state, middlewares

export default Store
