const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt')
const userController = require('../controllers/user')



router.post('/signUp', userController.createUser);
router.post('/login', userController.login)
//   .get('/', userController.getAllUsers)
//   .get('/:id', userController.getUser)
//   .put('/:id', userController.replaceUser)
//   .patch('/:id', userController.updateUser)
//   .delete('/:id', userController.deleteUser);

exports.router = router; 