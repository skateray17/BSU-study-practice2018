const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  nickname: String,
  passwordHash: String,
  passwordSalt: String,
});

module.exports = mongoose.model('User', UserSchema);
