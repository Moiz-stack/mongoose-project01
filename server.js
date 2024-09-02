const express = require('express')
const app = express()
const mongoose = require('mongoose')
const BookModel = require('./models/BookSchema')
const bookRouter = require('./routes/book')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/books')
const port = 3000

app.use('/book', bookRouter)

app.listen(port, (req, res) => {
    console.log(`Server is listening at http://localhost:${port}`)
})
