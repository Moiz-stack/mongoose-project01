const express = require('express')

const router = express.Router()
const authMiddleware = require('../Middleware/authMiddleware');

const {
    addUser,
    getUsers,
    getUserWithId,
    updateUserWithId,
    deleteUserWithId,
    loginUser,
    borrowBook,
    returnBook,
    viewBorrowedBooks } = require('../controller/user')


//add user

router.post('/add', addUser)

//get all users

router.get('/getUsers', getUsers)

//create login api

router.post('/login', loginUser)

//get user with id

router.get('/getUserwithID/:id', getUserWithId)

//update user with id

router.put('/updateUser/:id', updateUserWithId)

//delete user with id

router.delete('/deleteUser/:id', deleteUserWithId)

// Borrow a book
router.post('/users/:id/borrow/:bookId', authMiddleware, borrowBook);

// Return a book
router.post('/users/:id/return/:bookId', authMiddleware, returnBook);

// View borrowed books
router.get('/users/:id/borrowedBooks', viewBorrowedBooks);

module.exports = router
