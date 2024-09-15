const express = require('express')
const mongoose = require('mongoose')
const app = express()
const UserModel = require('./models/UserSchema')
const BookModel = require('./models/BookSchema')
const userRouter = require('./routes/userRouter')
const bookRouter = require('./routes/book')



app.use(express.json())

const port = 3000

mongoose.connect('mongodb://localhost:27017/books')

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'An error occurred!',
        error: err.message
    });
});

app.use('/user', userRouter)
app.use('/book', bookRouter)

app.listen(port, () => {
    console.log(`Server is listening at http://localhost${port}`)
})