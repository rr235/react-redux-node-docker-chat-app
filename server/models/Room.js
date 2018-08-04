const mongoose = require('mongoose');
const chatSchema = require('./Chat');
const { Schema } = mongoose;

const RoomSchema = new Schema({
  name: String,
  chats: [chatSchema],
  createdAt: Date,
  lastUsed: Date
});

mongoose.model('rooms', RoomSchema);
