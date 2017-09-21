const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
User = require('../models/UserModelView');

module.exports.getUsers = (callback, limit) => {
    User.find(callback).limit(limit);
}

module.exports.createUser = (user, callback) => {
    bcrypt.hash(user.Password, null, null, function(err, hash){
        user.Password = hash;
        User.create(user, callback);
    })
}

module.exports.deleteUser = (userId, callback) => {
    User.remove({
        _id: userId
    }, callback);
}

module.exports.getUserById = (userId, callback) => {
    User.findById(userId, callback);
}

module.exports.updateUser = (userId, userEntity, callback) => {
    console.log('userEntity', userEntity);
    console.log('userId', userId);

    User.findOneAndUpdate({_id: userId}, userEntity, { new: true }, callback);
}