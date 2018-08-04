const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  message: String,
  nickname: String,
  createdAt: Date
});
// _nickname: { type: Schema.Types.ObjectId, re: 'Nickname' }

mongoose.model('chats', chatSchema);
