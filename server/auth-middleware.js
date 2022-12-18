const { checkToken } = require('./services/token-service')

const auth = (req, res, next) => {
	const authHeader = req.header('authorization')
	if (authHeader) {
		const token = authHeader.split(' ')[1]
		if (token) {
			console.log('Token:', token)
			try {
				const data = checkToken(token)
				req.user = data
				next()
			} catch (e) {
				res.status(403).send('Forbidden (No valide JWT)')
			}
		} else {
			res.status(403).send('Forbidden (No JWT)')
		}
	} else {
		res.status(403).send('Forbidden (No authorization header)')
	}
}

module.exports = auth
