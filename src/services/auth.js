import { SUCCESS, CREATED, NOT_FOUND, CONFLICT } from '../utils/statusCodes'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import config from '../config'

// Auth methods service
export const registerUser = async newUser => {
	if (await User.findOne({ email: newUser.email })) {
		return { statusCode: CONFLICT, data: 'User already exists' }
	}

	try {
		const salt = await bcrypt.genSalt(config.saltJumps)
		newUser.password = await bcrypt.hash(newUser.password, salt)
	} catch (error) {
		throw new Error(`Encription Error:: ${error}`)
	}

	const savedUser = await new User({ ...newUser }).save()
	return { statusCode: CREATED, data: savedUser }
}

export const loginUser = async ({ email, password }) => {
	const user = await User.findOne({ email })
	if (!user) {
		return { statusCode: NOT_FOUND, data: 'User not found please register' }
	}

	// Check Password
	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) {
		return { statusCode: CONFLICT, data: 'Password incorrect' }
	}

	const payload = {
		id: user._id,
		name: user.name,
		lastNames: user.lastNames,
		avatar: user.avatar
	}
	try {
		const token = await jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 })
		return { statusCode: SUCCESS, data: `Bearer ${token}` }
	} catch (error) {
		throw new Error(`JsonWebToken Error:: ${error}`)
	}
}
