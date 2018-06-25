import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middlewares = [thunk]

const Store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
) //combined_reducers, initial_state, middlewares

export default Store
