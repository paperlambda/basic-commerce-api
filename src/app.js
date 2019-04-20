import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from './config'

require('dotenv').config()

const app = express()
const db = process.env.DB

mongoose.connect(db, { useNewUrlParser: true })
console.log('Connect to', db)

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.json())

const routes = [
  require('./routes/categories'),
  require('./routes/products')
]

app.use('/', routes)

export default app