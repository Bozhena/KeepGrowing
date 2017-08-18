$('document').ready(function()
{
    /* validation */
    $("#log-in").validate({
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
        var data = $("#log-in").serialize();
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
                        $("#error").css("display", "block")}).html('Invalid user name or password');
                    });

                }
                else if(data=="exist")
                {
					          setTimeout('$(".popup").fadeOut(500, function(){ $("#signIn").html("Add Card"); $("#signIn").attr({"id":"add_card", "onclick":"createCard()"}); $("#overlay").css("display", "none")});');
                }
                else{
                    $("#error").fadeIn(1000, function(){
                        $("#error").css("display", "block")}).html(data);
                    });
                }
            }
        });
        return false;
    }
    /* form submit	*/

    $("#contact").click(function() {
      username = $("#user_name").val();
      var data = { 'username':username};

        $.ajax({
            type: "POST",
            url: "../php/email.php",
            data: data,
            success: function(response){
              if(response.includes("empty_name")){
                  $("#error").fadeIn(1000, function(){
                      $("#error").css("display", "block")}).html('Please enter your user name');
                  });

              }
              else if (response.includes("wrong_email")){
                $("#error").fadeIn(1000, function(){
                    $("#error").css("display", "block")}).html('User was not found. Please check the name and try again');
                });
              }
              else if(response.includes("send"))
              {
                $("#error").fadeIn(1000, function(){
                    $("#error").css("display", "block")}).html('E-mail was send successfully!');
                });
              }
              else{
                  $("#error").fadeIn(1000, function(){
                      $("#error").css("display", "block")}).html(response);
                  });
              }
            }
        });
        return false;
    });
});
