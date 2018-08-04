module.exports = app => {
  app.get('/api/rooms', (req, res) => {
    const rooms = [
      { name: 'Episode III' },
      { name: 'Episode IV' },
      { name: 'Episode V' }
    ];
    res.send(rooms);
  });

  app.post('/api/rooms', (req, res) => {
    const { name } = req.body;
    res.send('Create new chat room.');
  });

  app.post('/api/chats', (req, res) => {
    const { room, username, message } = req.body;
    res.send('Create new chat message.');
  });
};
