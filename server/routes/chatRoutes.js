module.exports = app => {
  app.get('/rooms', (req, res) => {
    res.send('List of all chat rooms.');
  });

  app.post('/rooms', (req, res) => {
    const { room } = req.body;
    res.send('Create new chat room.');
  });

  app.post('/chats', (req, res) => {
    const { room, username, message } = req.body;
    res.send('Create new chat message.');
  });
};
