var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

    // @todo get user data and io.emit somewhere else
    // console.log("user is set to " + req.query.user);
    // var user = req.query.user;
    // io.emit('user', user);
});

module.exports = router;
