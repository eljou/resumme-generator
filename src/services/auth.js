import {
	SUCCESS,
	CREATED,
	NOT_FOUND,
	CONFLICT,
	BAD_REQUEST
} from '../utils/statusCodes'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import config from '../config'

import { responseObject } from '../utils/functions'
import validateRegistrationInput from '../utils/validation/registerData'
import validateLoginInput from '../utils/validation/loginData'

// Auth methods service
export const registerUser = async newUser => {
	const { errors, isValid } = validateRegistrationInput(newUser)
	if (!isValid) {
		return responseObject(BAD_REQUEST, errors)
	}

	if (await User.findOne({ email: newUser.email })) {
		return responseObject(CONFLICT, 'User already exists')
	}

	try {
		const salt = await bcrypt.genSalt(config.saltJumps)
		newUser.password = await bcrypt.hash(newUser.password, salt)
	} catch (error) {
		throw new Error(`Encription Error:: ${error}`)
	}

	const savedUser = await new User({ ...newUser }).save()
	return responseObject(CREATED, savedUser)
}

// Login user
export const loginUser = async data => {
	const { errors, isValid } = validateLoginInput(data)
	if (!isValid) {
		return responseObject(BAD_REQUEST, errors)
	}

	const { email, password } = data
	const user = await User.findOne({ email })
	if (!user) {
		return responseObject(NOT_FOUND, 'User not found please register')
	}

	// Check Password
	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) {
		return responseObject(CONFLICT, 'Password incorrect')
	}

	const payload = {
		id: user._id,
		name: user.name,
		lastNames: user.lastNames,
		avatar: user.avatar
	}
	try {
		const token = await jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 })
		return responseObject(SUCCESS, `Bearer ${token}`)
	} catch (error) {
		throw new Error(`JsonWebToken Error:: ${error}`)
	}
}

export const currentUser = data => responseObject(SUCCESS, data)
