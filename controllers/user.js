const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const model = require('../models/user')
const bcrypt = require('bcrypt')
const User = model.user;
const { Schema } = mongoose;
const jwt = require('jsonwebtoken')
exports.createUser = (req, res,next) => {
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if(err){
        return res.status(500).json({
            error:err
        })
    }
    else{
        const user = new User({
            username:req.body.username,
            password:hash,
            email:req.body.email,
            phone:req.body.phone,
            userType:req.body.userType
        })
        user.save((err,result)=>{
            console.log({err,result})
            if(err){
              res.status(500).json({error:err});
            } else{
              res.status(200).json({newUser:result,status:200});
            }
          })
    }
 })
};
exports.login =  (req, res,next) => {
    User.find({username:req.body.username}).exec()
    .then((user)=>{
        if(user.length < 1 ){
            return res.status(401).json({message:"user not found"});
        }
        else{
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(!result){
                    return res.status(401).json({message:"password is wrong"});
                }
                if(result){
                 const token = jwt.sign({
                    username:user[0].username,
                    userType:user[0].userType,
                    phone:user[0].phone,
                    email:user[0].email
                 },
                 'qwertyuiop',
                 {
                    expiresIn:'24h'
                 }
                 )
                 res.status(200).json({
                    username:user[0].username,
                    userType:user[0].userType,
                    phone:user[0].phone,
                    email:user[0].email,
                    token:token,
                    status:200 });
                }
            })
        }
    }).catch((err)=>{
        res.status(500).json({
            error :err
        })
    })
}
// exports.getAllUsers = (req, res) => {
//   res.json(users);
// };

// exports.getUser = (req, res) => {
//   const id = +req.params.id;
//   const user = users.find((p) => p.id === id);
//   res.json(user);
// };
// exports.replaceUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   users.splice(userIndex, 1, { ...req.body, id: id });
//   res.status(201).json();
// };
// exports.updateUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const user = users[userIndex];
//   users.splice(userIndex, 1, { ...user, ...req.body });
//   res.status(201).json();
// };
// exports.deleteUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const user = users[userIndex];
//   users.splice(userIndex, 1);
//   res.status(201).json(user);
// };