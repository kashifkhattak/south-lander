const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = () => {
  mongoose
    .connect(
      process.env.DB_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log('Connected to MongoDB...');
    })
    .catch((error) => {
      console.error('FATAL ERROR: Error connecting to MongoDB: ', error);
      process.exit(1);
    });
};

module.exports = connectToDB;