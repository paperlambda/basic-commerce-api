import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import mongoose from './config'
import { clientErrorHandler, logErrors, errorHandler } from './helper/error-handler';

require('dotenv').config()

const app = express()
const db = process.env.DB

mongoose.connect(db, { useNewUrlParser: true })
console.log('Connect to', db)

app.use(cors())
app.use(methodOverride())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.json())

const routes = [
  require('./routes/categories'),
  require('./routes/products')
]

app.use('/', routes)

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

export default app