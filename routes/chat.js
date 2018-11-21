var express = require('express');
var router = express.Router();
var room = ''; // USER ID
var io = require('socket.io');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('chat', { title: 'Express' });
});

module.exports = router;
