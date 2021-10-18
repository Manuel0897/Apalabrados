const express = require('express');
const app = express();

const { config } = require('./config/index');
const api = require('./routes/index.js');

const { logErrors, wrapErrors, errorHandler  } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// middleware de bodyparser
app.use(express.json());

// routes
api(app);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Cuando hagamos un request a nuestra aplicación, nos imprima un hello world
app.get('/hello', (req, res) => {
  res.send("Hello world");
})

app.get('/json', (req, res) => {
  res.json({hello: 'world'});
})

// Catch 404
app.use(notFoundHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
})

