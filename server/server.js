const express = require('express')
const cors = require('cors')
const router = require('./routes')

const PORT = 5000

const app = express()

app.disable('x-powered-by')
app.use(express.json())
// app.use(express.urlencoded())
app.use(cors())

app.use('/', router)

/**
 * Sterts web-server
 */
const startServer = () => {
	try {
		const server = app.listen(PORT, () => {
			console.clear()
			console.info(
				`\x1b[33m\x1b[3m Web-server is running on port \x1b[31m${
					server.address().port
				}\x1b[0m `
			)
		})
	} catch (e) {
		console.error(e)
	}
}

startServer()
