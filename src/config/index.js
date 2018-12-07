let config;

switch (process.env.REACT_APP_ENV) {
  case 'prod':
    config = require('./config.prod');
    break;
  case 'external':
    config = require('./config.external');
    break;
  case 'trial':
    config = require('./config.trial');
    break;
  case 'urgent':
    config = require('./config.urgent');
    break;
  default:
    config = require('./config.dev');
    break;
}

module.exports = config;
