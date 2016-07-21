var express = require('express');
var usersController = express.Router();

/* Chatroom */

usersController.get('/:user_name', function(req, res) {
	res.render('chatroom', {user_name:req.params.user_name});
    console.log(req.params.user_name + " entered the chatroom");
});

module.exports = usersController;