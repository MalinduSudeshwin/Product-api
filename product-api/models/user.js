const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // stored in plain text
});

module.exports = mongoose.model('User', userSchema);
