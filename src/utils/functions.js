export const safeRoute = fn => (req, res, next) =>
	Promise.resolve(fn(req, res, next)).catch(next)

export const getResponseObject = (statusCode, data) => ({ statusCode, data })

export const dispatchReponse = (res, fn) => async (...params) => {
	const { statusCode, data } = await fn(...params)
	return res.status(statusCode).json(data)
}

export const isEmpty = value =>
	value === undefined ||
	value === null ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0)
