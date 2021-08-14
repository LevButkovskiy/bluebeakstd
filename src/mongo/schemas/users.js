const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    login: {type: String, required: true, unique: true},
    encryptedPassword: {type: String, required: true},
    email: String,
    photoPath: String,
    role: {type: String, enum: ['admin', 'member'], required: true, default: 'member'}
})

module.exports = mongoose.model('Users', usersSchema);