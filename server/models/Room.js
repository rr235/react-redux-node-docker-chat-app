const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema({
  name: String,
  createdAt: Date,
  lastUsed: Date
});

mongoose.model('rooms', RoomSchema);
