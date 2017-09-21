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

api.delete('/users/:userId' ,(req, res) => {
        const userId = req.params.userId;

        userController.deleteUser(userId, (err) => {
            if(err)
                res.json({'message': ''}).status(500)
            else
                res.json({'message': 'User successfully deleted'})
                   .status(200);
        });
});


api.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;

    userController.getUserById(userId, (err, user) => {
        if(err)
            res.json({'message': ''}).status(500);
        else
            if(user != null)
                res.json(user).status(200);
            else
                res.json({'message': 'The User not found'}).status(404);
    });
});

api.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const userEntity = req.body;

    userController.updateUser(userId, userEntity, (err, user) => {
        if(err)
            res.json({'message': ''}).status(500);
        else
            res.json(user).status(200);
    }); 

})

module.exports = api;