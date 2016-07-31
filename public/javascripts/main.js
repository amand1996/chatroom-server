var socket = io();
$(document).ready(function() {
    $('#newMessageForm').on('submit', function() {
        socket.emit('message', $('#newMessage').val());
        $('#newMessage').val('');
        return false;
    });
    socket.on('message', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
    $('#enter').on('click', function(){
        $('#user').hide();
        $('#index').show();
        return false;
    });
});