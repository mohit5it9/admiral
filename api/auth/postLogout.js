'use strict';

var self = postLogout;
module.exports = self;

var async = require('async');

function postLogout(req, res) {
  var bag = {
    reqBody: req.body,
    resBody: {}
  };

  bag.who = util.format('auth|%s', self.name);
  logger.info(bag.who, 'Starting');

  async.series([
    _checkInputParams.bind(null, bag),
    _post.bind(null, bag)
  ],
    function (err) {
      logger.info(bag.who, 'Completed');
      if (err)
        return respondWithError(res, err);

      res.cookie('loginToken', '');
      sendJSONResponse(res, bag.resBody);
    }
  );
}

function _checkInputParams(bag, next) {
  var who = bag.who + '|' + _checkInputParams.name;
  logger.verbose(who, 'Inside');

  return next();
}

function _post(bag, next) {
  var who = bag.who + '|' + _post.name;
  logger.verbose(who, 'Inside');

  bag.resBody = {};

  return next();
}
