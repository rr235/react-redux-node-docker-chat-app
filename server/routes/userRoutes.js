module.exports = app => {
  app.get('/users/:roomTd', (req, res) => {
    res.send('List of all users in a room');
  });
};
