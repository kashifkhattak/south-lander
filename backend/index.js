const express = require('express');
const connectToDB = require('./startup/dbConnection');

const app = express();

require('./startup/routes')(app);

connectToDB();
require("./startup/validation")();

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
