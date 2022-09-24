require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;
