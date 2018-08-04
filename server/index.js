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

// connect to mongodb
connect();

server.listen(port, () => console.log(chalk.blue(`listening at ${port}`)));
