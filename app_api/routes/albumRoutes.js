var express = require('express');
var router = express.Router();
var albumCtrl = require('../controllers/albumCtrl');

router.get("/album/:name", albumCtrl.getAlbum);

module.exports = router;
