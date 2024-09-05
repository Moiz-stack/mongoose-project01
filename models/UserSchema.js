const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})


const user = mongoose.model('user', UserSchema)
module.exports = user