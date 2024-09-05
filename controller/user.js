
const UserModel = require('../models/UserSchema')

const addUser = (req, res) => {
    try {
        const user = new UserModel(req.body)
        user.save()
        res.status(200).json({
            message: "Successfully added",
            user: user
        })
    }
    catch (error) {
        res.status(404).send(error)
    }
}

const getUsers = async (req, res) => {

    try {
        const user = await UserModel.find()
        res.status(200).json({
            message: "Successfully displayed all users",
            user: user
        })
    }
    catch (error) {
        res.status(404).send(error)
    }
}

const getUserWithId = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.status(200).json({
            message: `Successfully displayed user with id: ${req.params.id}`,
            user: user
        })
    }

    catch (error) {
        res.status(404).send(error)
    }
}

const updateUserWithId = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message: `Successfully updated user with id: ${req.params.id}`,
            user: user
        })
    }
    catch (error) {
        res.status(404).send(error)
    }
}

const  deleteUserWithId = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Successfully deleted user with id: ${req.params.id}`,
            user: user
        })
    }
    catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    addUser,
    getUsers,
    getUserWithId,
    updateUserWithId,
    deleteUserWithId
}


