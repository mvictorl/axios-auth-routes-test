const express = require('express')
const cors = require('cors')
const auth = require('./auth-middleware')

const { checkToken } = require('./services/token-service')

const users = require('./users')
const posts = require('./posts')

const PORT = 5000

const app = express()

app.disable('x-powered-by')
app.use(express.json())
// app.use(express.urlencoded())
app.use(cors())

/**
 * Routes
 */
app.get('/', auth, (req, res) => {
	console.log(req.headers)
	console.log('Loged user:', req.user)
	res.send('Start page' + ' ' + (req?.user?.name || 'no user'))
})

app.get('/posts', (req, res) => {
	res.send(posts)
})

app.get('/posts/:id', (req, res) => {
	const post = posts.filter(p => p.id === req.params.id)
	if (post.length > 0) {
		res.send(post)
	} else {
		res.status(500)
		res.send('No that post')
	}
})

app.get('/admin', auth, (req, res) => {
	res.send('Admin page (strict)')
})

app.post('/login', (req, res, next) => { })
/* =========================================================== */

/**
 *
 */

const startServer = () => {
	try {
		const server = app.listen(PORT, () => {
			console.clear()
			console.info(
				`\x1b[33m\x1b[3m Web-server is running on port \x1b[31m${server.address().port
				}\x1b[0m `
			)
		})
	} catch (e) {
		console.error(e)
	}
}

startServer()