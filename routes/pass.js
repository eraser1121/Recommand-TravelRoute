var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pass', { title: 'MINE' });
});

module.exports = router;
