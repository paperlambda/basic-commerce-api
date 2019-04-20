import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.json())

const routes = [
  require('./routes/categories')
]

app.use('/', routes)

export default app