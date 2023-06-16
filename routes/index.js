var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*router.get('/product', (req, res, next) => {
  res.render('product');
});

router.get('/add', (req, res, next) => {
  res.render('add');
});

router.get('/cheakout', (req, res, next) => {
  res.render('cheakout');
});*/

module.exports = router;
