const env = process.env.NODE_ENV || 'development';

const express = require('express');
const config = require('./config/config')[env];
const dbConnector = require('./config/database');
const appConfig = require('./config/express');
const routesConfig = require('./config/routes');

const app = express();

appConfig(app);
routesConfig(app);

dbConnector().then(() => {
    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  });