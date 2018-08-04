require('./services/env');
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const connect = require('./services/connectivity');
const socketIO = require('socket.io');
const http = require('http');
require('./models/Room');
require('./models/Nickname');
require('./models/Chat');

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());

require('./routes/userRoutes')(app);
require('./routes/roomRoutes')(app);
require('./routes/chatRoutes')(app, io);

if (process.env.NODE_ENV === 'production') {
  // to serve production assets (css and js)
  app.use(express.static('build'));

  // serve index.html if the request doesnt match any of the defined route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// connect to mongodb
connect();

server.listen(port, () => console.log(chalk.blue(`listening at ${port}`)));
