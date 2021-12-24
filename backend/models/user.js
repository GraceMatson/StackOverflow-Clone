const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  outlookId: {type: String, required: true},
  name: {type: String, required: true},
  email: {type: String, required: true},
  accessToken: { type: String, required: true,select: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;