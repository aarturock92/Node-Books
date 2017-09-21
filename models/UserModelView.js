const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: String,
    FirstLastName: String,
    SecondLastName: String,
    Email: String,
    User: String,    
    Password: String
})

const User = module.exports = mongoose.model('User', UserSchema);