import app from './src/app'

require('dotenv').config()

const port = process.env.PORT || 3000

app.listen(port)
console.log('Running on port ', port)