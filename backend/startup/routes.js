const express = require('express');
require('express-async-errors');
const error = require('../middlewares/error');

module.exports = (app) => {
  app.use(express.json());
  app.use(error);
};
