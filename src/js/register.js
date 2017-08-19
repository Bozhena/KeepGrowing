$('document').ready(function()
{
    /* validation */
    $("#log-up").validate({
        rules:
        {
            user_name: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            user_email: {
                required: true,
                email: true
            },
        },
        messages:
        {
            user_name: "Enter a Valid Username",
            password:{
                required: "Provide a Password",
                minlength: "Password Needs To Be Minimum of 8 Characters"
            },
            user_email: "Enter a Valid Email"
        },
        submitHandler: submitForm
    });
    /* validation */

    /* form submit */
    function submitForm()
    {
        var data = $("#log-up").serialize();

        $.ajax({

            type : 'POST',
            url  : '../php/register.php',
            data : data,
            beforeSend: function()
            {
                $("#error").fadeOut();
            },
            success :  function(data)
            {
                if(data==1){
                  $("#error").fadeIn(1000, function(){
                      $("#error").html('Sorry user name is already in use');
                  });
                  $("#error").fadeOut(5000, function(){
                    $("#error").html('');
                  });
                }
                else if(data=="registered")
                {
                    setTimeout('$(".popup").fadeOut(500, function(){$("#overlay").css("display", "none")});');}
                else{
                $("#error").fadeIn(1000, function(){
                    $("#error").html(data);
                  });
                $("#error").fadeOut(5000, function(){
                  $("#error").html('');
                });
              }
            }
        });
        return false;
    }
    /* form submit */
});
