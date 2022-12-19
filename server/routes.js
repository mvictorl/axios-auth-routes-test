// const router = new Router()
const router = new require('express').Router()
const auth = require('./auth-middleware')
const { checkToken, createAccessToken } = require('./services/token-service')

const users = require('./users')
const posts = require('./posts')

router.get('/', auth, (req, res) => {
	console.log(req.headers)
	console.log('Loged user:', req.user)
	res.send('Start page' + ' ' + (req?.user?.userName || 'no user'))
})

router.get('/posts', (req, res) => {
	res.send(posts)
})

router.get('/posts/:id', (req, res) => {
	const post = posts.filter(p => p.id === req.params.id)
	if (post.length > 0) {
		res.send(post)
	} else {
		res.status(500)
		res.send('No that post')
	}
})

router.get('/admin', auth, (req, res) => {
	res.send('Admin page (strict)')
})

router.post('/login', (req, res, next) => {
	const { username, password } = req.body
	console.log(username)
	console.log(password)
	res.cookie('access_token', createAccessToken({ userName: username }), {
		httpOnly: true,
		maxAge: 1000 * 60 * 10,
		// Only by HTTPS:
		// secure: true,
		sameSite: true,
	})
	res.json({ userName: username })
})

module.exports = router
