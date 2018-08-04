const mongoose = require('mongoose');
const Room = mongoose.model('rooms');

module.exports = (app, io) => {
  app.get('/api/chats', async (req, res) => {
    const { roomName } = req.query;
    const room = await Room.findOne({ name: roomName });
    res.send(room.chats);
  });

  app.post('/api/chats', async (req, res) => {
    const { roomName, nickname, message, createdAt } = req.body;

    const room = await Room.findOne({ name: roomName });
    const chat = {
      message,
      nickname,
      createdAt
    };

    room.chats.push(chat);
    await room.save();

    io.emit(roomName, chat);

    res.send(chat);
  });
};
