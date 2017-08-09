$('document').ready(function()
{
    /* validation */
    $("#login-form").validate({
        rules:
        {
            user_name: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 15
            },
        },
        messages:
        {
            user_name: "Enter a Valid Username",
            password:{
                required: "Provide a Password",
                minlength: "Password Needs To Be Minimum of 6 Characters"
            }
        },
        submitHandler: submitForm
    });
    /* validation */

    /* form submit */
    function submitForm()
    {
        var data = $("#login-form").serialize();

        $.ajax({
            type : 'POST',
            url  : '../php/login.php',
            data : data,
            beforeSend: function()
            {
                $("#error").fadeOut(); 
            },
            success :  function(data)
            {
                if(data==1){

                    $("#error").fadeIn(1000, function(){
                        $("#error").html('<br> Invalid user name or password');
                    });

                }
                else if(data=="exist")
                {
					setTimeout('$(".popup").fadeOut(500, function(){ $("#signIn").html("Add Card"); $("#signIn").attr({"id":"add_card", "onclick":"createCard()"}); $("#overlay").css("display", "none")});');
                }
                else{
                    $("#error").fadeIn(1000, function(){
                        $("#error").html('<br>'+data);
                    });
                }
            }
        });
        return false;
    }
    /* form submit	*/

});