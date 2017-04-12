'use strict';

module.exports = stateRoutes;
var validateAccount = require('../../common/auth/validateAccount.js');

function stateRoutes(app) {
  app.get('/api/state', validateAccount, require('./get.js'));
  app.get('/api/state/logs', validateAccount, require('./getLogs.js'));
  app.post('/api/state', validateAccount, require('./post.js'));
}
