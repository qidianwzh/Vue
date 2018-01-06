$(document).ready(function () {
    $("#img-sending").hide();
    function sendEmail() {
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            dataType: 'json',
            data: {
                email: $('#email').val(),
                from: $('#name').val(),
                message: $('#message').val()
            },
            success: function (msg) {
                $("#img-sending").hide();
                var msg = msg.MAIL_SUCCESS;
                $('#mail-send-msg').html(msg).removeClass('mail-send-error').addClass('mail-send-success');
                $('#email').val('Email');
                $('#name').val('Name');
                $('#message').val('Message');
            },
            error: function (err) {
                $("#img-sending").hide();
                var msg = err.responseText;
                if (msg.lastIndexOf('MAIL_ERROR') > -1)
                    msg = msg.replace('MAIL_ERROR', '~').split('~')[1];
                $('#mail-send-msg').html(msg).removeClass('mail-send-success').addClass('mail-send-error');
            }
        });

        return false;
    }
    $('#send-message').click(function () {
        if (validateForm()) {
            $("#img-sending").show();
            sendEmail();
        }
        return false;
    });

    function validateForm() {
        var mail = $('#email');
        var name = $('#name');
        var message = $('#message');

        if (mail.val().length > 0 && mail.val() != mail.attr('title')) {
            if (validEmail(mail.val()))
                mail.removeClass('error');
            else
                mail.addClass('error');
        }
        else {
            mail.addClass('error');
        }
        if (name.val().length > 0 && name.val() != name.attr('title')) {
            name.removeClass('error');
        }
        else {
            name.addClass('error');
        }
        if (message.val().length > 0 && message.val() != message.attr('title')) {
            message.removeClass('error');
        }
        else {
            message.addClass('error');
        }

        return !(mail.hasClass('error') || name.hasClass('error') || message.hasClass('error'));
    }
    function validEmail(e) {
        var pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(e).search(pattern) != -1;
    }

});