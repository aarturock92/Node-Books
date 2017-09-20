const express = require('express');
const userController = require('../controllers/UserController');
const api = express.Router();

api.get('/users', (req, res) => {
    userController.getUsers((err, users) => {
        if(err)
            throw err;

        res.json(users).status(200);
    });
});

api.post('/users', (req, res) => {
    const user = req.body;

    userController.createUser(user, (err, user) => {
        if(err)
            throw err;

        res.json(user).status(200);
    });
})


module.exports = api;