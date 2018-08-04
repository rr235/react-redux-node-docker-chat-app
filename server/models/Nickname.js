const mongoose = require('mongoose');
const { Schema } = mongoose;

const nicknameSchema = new Schema({
  name: String,
  createdAt: Date,
  isActive: { type: Boolean, default: true }
});

mongoose.model('nicknames', nicknameSchema);
