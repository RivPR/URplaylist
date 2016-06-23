var express = require('express');
  var router = express.Router();
  var ctrlMain = require('../controllers/main');
  var cookie = require('cookie');

   /* GET home page. */
  router.get('/', ctrlMain.index);

  module.exports = router;
