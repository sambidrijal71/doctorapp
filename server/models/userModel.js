const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, { message: "Name is a required field." }]
  },
  email: {
    type: String,
    required: [true, { message: "Email is a required field." }]
  },
  password: {
    type: String,
    required: [true, { message: "Password is a required field." }]
  },

}, { timestamps: true })

const userModel = mongoose.model('users', userSchema);

module.exports = userModel