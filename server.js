const express = require('express')
const app = express()
const mongoose = require('mongoose')
const BookModel = require('./BookSchema')

app.use(express.json())

const port = 3000

mongoose.connect('mongodb://localhost:27017/books')

// add book 

app.post('/book/create', (req, res) => {
    const book = new BookModel(req.body)
    book.save()
    res.status(200).json({
        message: "Successfully added",
        book: book
    })
})

// get all books

app.get('/book/create', async (req, res) => {
    const book = await BookModel.find()
    res.status(200).json({
        message: "Successfully displayed",
        book: book
    })
})

// get book with id

app.get('/book/create/:id', async (req, res) => {
    const book = await BookModel.findById(req.params.id)
    
    res.status(200).json({
        message: "Successfully displayed",
        book: book
    })
})

// post (update) book with id

app.put('/book/create/:id', async (req, res) => {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        message: "Successfully updated",
        book: book
    })
})

// delete book with id

app.delete('/book/create/:id', async (req, res) => {
    const book = await BookModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: "Successfully deleted",
        book: book
    })
})


// get book with book title

app.get('/book/getbookfromtitle/:title',async(req,res)=>{
    const book= await BookModel.findOne({title:req.params.title})
    res.status(200).json({
        message: "Successfully displayed book using title",
        book: book
    })
})

//get book with book author
app.get('/book/getbookfromauthor/:author',async(req,res)=>{
    const book= await BookModel.findOne({author:req.params.author})
    res.status(200).json({
        message: "Successfully displayed book using author",
        book: book
    })
})

app.listen(port, (req, res) => {
    console.log(`Server is listening at http://localhost:${port}`)
})
