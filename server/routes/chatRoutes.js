module.exports = app => {
  app.post('/api/chats', (req, res) => {
    const { room, username, message } = req.body;
    res.send('Create new chat message.');
  });
};
