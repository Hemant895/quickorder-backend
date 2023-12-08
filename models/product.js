const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {type: String, required: true, unique: true} ,
  name: {type: String, required: true, unique: true},
  price:{type: Number, min:[0,'wrong price'],required: true},
  tag: [String],
  favorite: {type:Boolean},
  stars: {type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating'], default:0},
  imgurl: {type:String},
  origins: [{type: String, required: true}],
  cooktime: {type:String},
  });
  
exports.Product = mongoose.model('food-data', productSchema);