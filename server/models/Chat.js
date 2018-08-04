const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  message: String,
  _nickname: { type: Schema.Types.ObjectId, re: 'Nickname' }
});

mongoose.model('chats', chatSchema);
