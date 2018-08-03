const mongoose = require('mongoose');
const chalk = require('chalk');

const connectWithRetry = () => {
  console.log(chalk.magenta(`Connecting to ${process.env.MONGO_DB_URL} ...`));
  return mongoose.connect(process.env.MONGO_DB_URL);
};

mongoose.connection.on('error', err => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
  setTimeout(connectWithRetry, 5000);
});

mongoose.connection.on('connected', () => {
  console.log(chalk.magenta('MongoDB is connected'));
});

module.exports = connectWithRetry;
