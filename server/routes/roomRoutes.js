const mongoose = require('mongoose');

const Room = mongoose.model('rooms');

module.exports = app => {
  app.get('/api/rooms', async (req, res) => {
    const rooms = await Room.find();
    res.send(rooms);
  });

  app.post('/api/rooms', async (req, res) => {
    const { name } = req.body;

    // return if room with same name already exists
    if (await Room.findOne({ name })) {
      res.send({});
      return;
    }

    const room = await new Room({
      name,
      createdAt: Date.now()
    }).save();

    res.send(room);
  });
};
