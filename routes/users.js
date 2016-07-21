var express = require('express');
var usersController = express.Router();

/* Chatroom */
usersController.get('/', function(req, res) {
    res.send("Thanks for coming. To join the chatroom, insert your name after the chat/ in the url and press Enter. :)");
});

usersController.get('/:user_name', function(req, res) {
    res.render('users', { user_name: req.params.user_name });
    console.log(req.params.user_name + " entered the chatroom");
});

module.exports = usersController;