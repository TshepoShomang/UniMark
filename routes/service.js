var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service', (req, res, next) => {
  res.render('service');
});


module.exports = router;