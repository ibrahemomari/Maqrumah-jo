
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    /*==================================================================
    [ Show / hide Form ]*/
    
    $('.contact100-btn-hide').on('click', function(){
        $('.wrap-contact100').fadeOut(400);
    })

    $('.contact100-btn-show').on('click', function(){
        $('.wrap-contact100').fadeIn(400);
    })

})(jQuery);


$('#name').focusout(function(){
    var name=$('#name').val();

    
    if(name.trim() == "")
      {
       
        $("#name").notify(
            "Please enter a valid name", 
            { position:"bottom left" }
          );

        $('#name').addClass('border-error');
        $('#btn-submit').prop('disabled', true);
      }
      else
      {
        
        $('#name').removeClass('border-error');
        $('#btn-submit').prop('disabled', false);
        
      }

    
});

$('#email').focusout(function(){
var email=$('#email').val();
var emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!emailpattern.test(email))
      {
        $("#email").notify(
            "Please enter a valid email", 
            { position:"bottom left" }
          );
        $('#email').addClass('border-error');
        
      }
      else
      {
       
        $('#email').removeClass('border-error');
        $('#btn-submit').prop('disabled', false);
        
      }

});

$('#message').focusout(function(){
var message=$('#message').val();
if(message.trim() == "")
      {
        $("#message").notify(
            "Please enter a valid message", 
            { position:"bottom left" }
          );
        $('#message').addClass('border-error');
      }
      else
      {
        $('#error-message-message').text(' ');
        $('#message').removeClass('border-error');
        $('#btn-submit').prop('disabled', false);
        
      }

});


$(function(){
    $('#btn-submit').click(function(){
        var name,email,message;
        //get date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + '/' + mm + '/' + yyyy;

      email=$('#email').val();
      name=$('#name').val();
      message=$('#message').val();

      if (name.trim() == "" || message.trim() == "" || email.trim()=="" )
      {
        $('#btn-submit').prop('disabled', true);
        return false;
      }
      else
      {
        $('#btn-submit').prop('disabled', false);
        
      }



      var contactUs=
      {
          email:email,
          name:name,
          message:message,
          date:today
      }

      console.log(contactUs);

      $.ajax({
          type:'PATCH',
          url:`http://127.0.0.1:3002/api/users/ContactUs/`,
          data:
          {
              email:contactUs.email,
              name:contactUs.name,
              message:contactUs.message,
              date:contactUs.date
          },
          seccess:function(data)
          {
              console.log(data);
          }


      });
      
    Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Thank you for contacting us, we will contact you shortly by email ',
        showConfirmButton: false,
        timer: 8000
      });
      setTimeout(() => {
        location.reload();
      }, 4000);
    });


})