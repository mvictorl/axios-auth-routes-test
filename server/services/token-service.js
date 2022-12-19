const jwt = require('jsonwebtoken')

require('dotenv').config()
const KEY = process.env.JWT_SECRET_KEY
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_EXPIRES_IN

exports.createAccessToken = user => {
	try {
		return jwt.sign(user, KEY, { expiresIn: ACCESS_TOKEN_LIFE })
	} catch (e) {
		console.error('Access token create error:', e)
		return null
	}
}

exports.checkToken = token => jwt.verify(token, KEY)
