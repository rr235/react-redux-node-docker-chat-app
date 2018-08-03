require('./services/env');
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const connect = require('./services/connectivity');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

require('./routes/chatRoutes')(app);
require('./routes/userRoutes')(app);

// connect to mongodb
connect();

app.listen(port, () => console.log(chalk.blue(`listening at ${port}`)));
