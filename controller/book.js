const BookModel = require('../models/BookSchema')


const createBook = (req, res) => {
    const book = new BookModel(req.body)
    book.save()
    res.status(200).json({
        message: "Successfully added",
        book: book
    })
}

const getAllBooks = async (req, res) => {
    const book = await BookModel.find()
    res.status(200).json({
        message: "Successfully displayed",
        book: book
    })
}

const getBookWithId = async (req, res) => {
    const book = await BookModel.findById(req.params.id)

    res.status(200).json({
        message: "Successfully displayed",
        book: book
    })
}

const updateBookWithId = async (req, res) => {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        message: "Successfully updated",
        book: book
    })
}

const deleteBook = async (req, res) => {
    const book = await BookModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: "Successfully deleted",
        book: book
    })
}

const getBookWithTitle = async (req, res) => {
    const book = await BookModel.findOne({ title: req.params.title })
    res.status(200).json({
        message: "Successfully displayed book using title",
        book: book
    })
}

const getBookWithAuthor = async (req, res) => {
    const book = await BookModel.findOne({ author: req.params.author })
    res.status(200).json({
        message: "Successfully displayed book using author",
        book: book
    })
}

module.exports = {
    createBook,
    getAllBooks,
    updateBookWithId,
    getBookWithId,
    deleteBook,
    getBookWithTitle,
    getBookWithAuthor
}