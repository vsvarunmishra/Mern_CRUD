const mongoose = require('mongoose');

const signIn = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        trim: true
    },
    lastName:{
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        require: true
    }
})

module.exports = mongoose.model("SignIn",signIn);