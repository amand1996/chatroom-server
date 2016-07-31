var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chat', function(req, res) {
    res.render('index');
});
router.get('/', function(req, res) {
    res.render('user');
});

module.exports = router;