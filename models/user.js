const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema =  new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  phone:{type:Number,required:true},
  userType:{type:String}
  });
  
exports.user = mongoose.model('users', userSchema);