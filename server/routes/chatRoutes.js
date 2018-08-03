module.exports = app => {
  app.get('/api/rooms', (req, res) => {
    res.send('List of all chat rooms.');
  });

  app.post('/api/rooms', (req, res) => {
    const { room } = req.body;
    res.send('Create new chat room.');
  });

  app.post('/api/chats', (req, res) => {
    const { room, username, message } = req.body;
    res.send('Create new chat message.');
  });
};
