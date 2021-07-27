const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {type: String, required: true},
    encryptedPassword: {type: String, required: true},
    email: String,
    photoPath: String,
    role: {type: String, enum: ['admin', 'member'], required: true, default: 'member'}
})

module.exports = mongoose.model('User', userSchema);