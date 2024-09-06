const UserModel = require('../models/UserSchema');

const addUser = async (req, res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(200).json({
            message: "Successfully added",
            user: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({
            message: "Successfully displayed all users",
            users: users
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

const getUserWithId = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: `Successfully displayed user with id: ${req.params.id}`,
            user: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
};

const updateUserWithId = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: `Successfully updated user with id: ${req.params.id}`,
            user: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

const deleteUserWithId = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: `Successfully deleted user with id: ${req.params.id}`,
            user: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

module.exports = {
    addUser,
    getUsers,
    getUserWithId,
    updateUserWithId,
    deleteUserWithId
};
