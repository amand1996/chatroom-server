$(document).ready(function() {
    $("#messageText").on('change', function() {
        $("#sendBtn").on('click', function() {
            var text = $("#messageText").val();
            var str = "<p>" + text + "</p>";
            $("#msg").append(str);
            $("#messageText").val("");
        });
    });

    $("#messageText").keypress(function(e) {
        if (e.which == 13) {
            var text = $("#messageText").val();
            var str = "<p>" + text + "</p>";
            $("#msg").append(str);
            $("#messageText").val("");
        }
    });
});