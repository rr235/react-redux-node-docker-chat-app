const mongoose = require('mongoose');

const Room = mongoose.model('rooms');

module.exports = app => {
  app.get('/api/rooms', async (req, res) => {
    const rooms = await Room.find();
    res.send(rooms);
  });

  app.post('/api/rooms', async (req, res) => {
    const { name } = req.body;
    const existingRoom = await Room.findOne({ name });
    if (existingRoom) {
      res.send(existingRoom);
      return;
    }

    const room = await new Room({
      name,
      createdAt: Date.now()
    }).save();

    res.send(room);
  });
};
