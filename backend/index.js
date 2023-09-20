const express = require('express');
const connectToDB = require('./startup/dbConnection');
const cors = require('cors'); 

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

require('./startup/routes')(app);

connectToDB();
require("./startup/validation")();

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
