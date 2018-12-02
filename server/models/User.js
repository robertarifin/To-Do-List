"use strict"

const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  login: String
})

const User = mongoose.model('User', blogSchema);

module.exports = User