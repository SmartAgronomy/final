
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  state:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  role: {
    type: Number,
    default: 0,
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
