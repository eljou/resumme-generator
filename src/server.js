import 'babel-polyfill'
import path from 'path'
import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import passport from 'passport'

import conf from './config'
import setPassportStrategy from './config/passportStrategy'
import setRoutes from './routes'
import setUpDatabaseConnection from './services/db'

const app = express()

app.use(cors())
app.use(logger(conf.logger))
app.use(express.json())
app.use(passport.initialize())
app.use(express.static(path.join(__dirname, 'client/build')))

setPassportStrategy(passport)
setRoutes(app)

app.listen(conf.port, err => {
	if (err) {
		console.log(`Error on server startup ${err}`)
		process.exit(1)
	}

	setUpDatabaseConnection()

	console.log(`Example app listening on ${conf.host}:${conf.port}!`)
})
