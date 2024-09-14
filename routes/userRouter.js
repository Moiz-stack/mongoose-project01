const express = require('express')

const router = express.Router()

const {
    addUser, 
    getUsers, 
    getUserWithId, 
    updateUserWithId, 
    deleteUserWithId,
    loginUser
} = require('../controller/user')


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

module.exports = router
