const express = require('express');
const connectToDB = require('./startup/dbConnection');
const cors = require('cors'); 

const app = express();

const allowedOrigins = ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3000'];

const corsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

require('./startup/routes')(app);

connectToDB();
require("./startup/validation")();

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
