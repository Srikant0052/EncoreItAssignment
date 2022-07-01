const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    roles: {
        type: String,
        enum: ['Admin', 'User', 'Guest']
    }

},
    { timestamps: true });
module.exports = mongoose.model('User', userSchema);