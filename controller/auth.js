const UserModel = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    try {
       // console.log(req.body);
        const user = new UserModel(req.body);
        const salt = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword
        await user.save();
        res.status(200).json({
            message: "Successfully added",
            user: user
        });
    } catch (error) {
        //console.log(error,'asddsad')
        next(error)
    }
};


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User Does Not Exist",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect Email Password",
            });
        }
        const accessToken = await jwt.sign({ email: user.email, id: user.id }, 'secret');
        return res.status(200).json({
            accessToken: accessToken,
            message: "Login Success",
        });
    } catch (error) {
        next(error);
    }
}


module.exports = {
    signup,
    login
};