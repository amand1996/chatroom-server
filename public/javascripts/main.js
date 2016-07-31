var socket = io();
$(document).ready(function() {
    $('#newMessageForm').on('submit', function() {
        msg = "<strong>"+ user + ":</strong> " + $('#newMessage').val();
        socket.emit('message', msg);
        $('#newMessage').val('');
        return false;
    });
    socket.on('message', function(msg) {
        $('#messages').append($('<li>').html(msg));
    });
    socket.on('userconnected', function(){
        $('#messages').append($('<li>').html("<p>1 member joined</p>"));
    })
    socket.on('userdisconnected', function(){
        $('#messages').append($('<li>').html("<p>1 member left</p>"));
    })
    $('#enter').on('click', function(){
        $('#user').hide();
        $('#index').show();
        return false;
    });

    $('#user-name').on('input', function(){
        user = $('#user-name').val().trim();
        if($('#user-name').val().trim()!=''){
            $('#enter').prop('disabled', false);
        }
        else{
            $('#enter').prop('disabled', true);
        }
    })
});