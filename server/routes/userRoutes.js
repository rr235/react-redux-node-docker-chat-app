module.exports = app => {
  app.get('/users/:roomId', (req, res) => {
    res.send(`List of all users in a room ${req.params.roomId}`);
  });
};
