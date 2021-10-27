// the variable in sign up form (that what you need in back end )

var id_num , card_num , email ,c_email , phone , password,c_password ,country_code ,university_name ;


id_num=document.getElementById('ID-Num').value;
card_num=document.getElementById('card-num').value;
email=document.getElementById('email').value;
c_email=document.getElementById('c-email').value;
phone=document.getElementById('phone').value;
password=document.getElementById('password').value;
c_password=document.getElementById('c-password').value;








var e = document.getElementById("phone_code");







// get the phone code with plus(+) sign

$("#phone_code").change(function()
{
   country_code ='+'+ e.options[e.selectedIndex].value;

  
});


$('#btn-code-request').click(function(){
    var ele = document.getElementsByName('r1'); 
    var type;

    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked  ) 
        type=ele[i].value;
    } 
    if($('#email').val().trim() != ""&&$('#ID-Num').val().trim() != ""&&$('#password').val().trim() != ""&&$('#phone').val().trim() != ""&&$('#card-num').val().trim() != ""&&$('#c-email').val().trim() != ""&&$('#c-password').val().trim() != "")
    {
        if(type==='phone' && $('#phone').val().trim()!="" )
        {
            Swal.fire({
                title: `Are you sure of the number is (${$('#phone').val()})`,
                
                showCancelButton: true,
                confirmButtonText: `YES`,
                cancelButtonText:`NO`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                
                if (result.isConfirmed) {
                  
                  Swal.fire({
                    title:`The code has been sent to (${$('#phone').val()}). Please enter the code in the code field`,
                    icon:`success`,
                    showCancelButton: false,
                    confirmButtonText: `OK`,
                    
                    
                  }).then((result)=>{
                        if(result.isConfirmed)
                        {
                            ($("#code").focus());
                        }
                  })
                }
                
              })
        }
        else if (type==='email' && $('#email').val().trim()!="")
        {
            Swal.fire({
                title: `Are you sure of the email is (${$('#email').val()})`,
                
                showCancelButton: true,
                confirmButtonText: `YES`,
                cancelButtonText:`NO`
                
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                
                if (result.isConfirmed) {
                  
                  Swal.fire({
                    title:`The code has been sent to (${$('#email').val()}). Please enter the code in the code field`,
                    icon:`success`,
                    showCancelButton: false,
                    confirmButtonText: `OK`,
                    
                    
                  }).then((result)=>{
                        if(result.isConfirmed)
                        {
                            ($("#code").focus());
                        }
                  })
                }
                
              })
        }
    }
    else
    {
        console.log('Please complete the required information');
        $.notify(
            `Please complete the required information`, 
             
            { position:"right bottom",className: 'error' },
             
            
          );
    }
    



});









  $(function(){

    $('#pass_instructions').hide();
    var IDpattern ,cardNumpattern,emailpattern,phonepattern,passwordpattern;
    IDpattern=/^\d{10}$/;
    
    emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    phonepattern=/^[0-9]{9}$|^[0-9]{10}$/;
    passwordpattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{6,64}$/;

    var id,card_no , email , phone ,password;

   
    
    
    
    


    // id validation
    $('#ID-Num').focusout(function()
    {
        id=parseInt($('#ID-Num').val());
        

        if(!IDpattern.test(id))
        {
            $("#ID-Num").notify(
                "Invalid ID ", 
                { position:"bottom right" , className:"error" }
              );
              $('#ID-Num').addClass('borderError');
              

        }
        else 
        {
            $('#ID-Num').removeClass('borderError');
            
        }
    });
    

       // card number validation
       $('#card-num').focusout(function()
       {
        card_no=$('#card-num').val();
           
   
           if(card_no.length!==5)
           {
               $("#card-num").notify(
                   "Invalid card number ", 
                   { position:"bottom right" , className:"error" }
                 );
                 $('#card-num').addClass('borderError');
   
           }
           else 
           {
               $('#card-num').removeClass('borderError');
               
           }
       });


          // email validation
    $('#email').focusout(function()
    {
        email=$('#email').val();
        

        if(!emailpattern.test(email))
        {
            $("#email").notify(
                "Invalid email ", 
                { position:"bottom right" , className:"error" }
              );
              $('#email').addClass('borderError');

        }
        else 
        {
            $('#email').removeClass('borderError');
            
        }
    });

       // phone validation
       $('#phone').focusout(function()
       {
           phone=$('#phone').val();
           
   
           if(!phonepattern.test(phone))
           {
               $("#phone").notify(
                   "Invalid phone number ", 
                   { position:"bottom right" , className:"error" }
                 );
                 $('#phone').addClass('borderError');
   
           }
           else 
           {
               $('#phone').removeClass('borderError');
               
           }
       });


          // Password validation
    $('#password').focusout(function()
    {
        password=$('#password').val();
        

        if(!passwordpattern.test(password))
        {
            $("#password").notify(
                "Invalid", 
                { position:"left middel" , className:"error" }
              );
              $('#password').addClass('borderError');
              $('#pass_instructions').fadeIn();

        }
        else 
        {
            $('#password').removeClass('borderError');
            $('#pass_instructions').fadeOut();
            
            
        }
    });



       // id validation
       $('#ID-Num').focusout(function()
       {
           id=parseInt($('#ID-Num').val());
           
   
           if(!IDpattern.test(id))
           {
               $("#ID-Num").notify(
                   "Invalid ID ", 
                   { position:"bottom right" , className:"error" }
                 );
                 $('#ID-Num').addClass('borderError');
   
           }
           else 
           {
               $('#ID-Num').removeClass('borderError');
               
           }
       });


          // id validation
    $('#ID-Num').focusout(function()
    {
        id=parseInt($('#ID-Num').val());
        

        if(!IDpattern.test(id))
        {
            $("#ID-Num").notify(
                "Invalid ID ", 
                { position:"bottom right" , className:"error" }
              );
              $('#ID-Num').addClass('borderError');

        }
        else 
        {
            $('#ID-Num').removeClass('borderError');
            
        }
    });






    $('#submit-btn').click(function(){
       
        
        var id,card_no , email , phone ,password,c_eml,confirmPassword;

        id=parseInt($('#ID-Num').val());
        card_no=$('#card-num').val();
        email=$('#email').val();
        phone=$('#phone').val();
        password=$('#password').val();
        c_eml= $("#c-email").val();
        confirmPassword = $("#c-password").val();


        
        
        
        if (email != c_eml) {
            Swal.fire({
                position: 'middel',
                icon: 'error',
                title: 'Oops , the confirm email  not match !!',
                showConfirmButton: false,
                timer: 2000
              })
              $("#c-email").addClass('borderError');
              
            return false;
        }
        else if(password != confirmPassword)
        {
            Swal.fire({
                position: 'middel',
                icon: 'error',
                title: 'Oops , the confirm password  not match !!',
                showConfirmButton: false,
                timer: 2000
              })
              $("#c-password").addClass('borderError');
            return false;
        }
        else
        {
            $("#c-email").removeClass('borderError');
            $("#c-password").removeClass('borderError');
            
        }
            
        

        var studentInfo=
        {
            email:email,
            ID:id,
            password:password,
            phonenumber:phone,
            personalCardNumber:card_no
        };
        console.log(studentInfo);
        
        $.ajax({
            type:'POST',
            url:'http://127.0.0.1:3002/api/users/register',
            data:studentInfo,
            success:function(data)
            {
                if(data.success===true)
                {
                    console.log(data);
                    Swal.fire({
                        position: 'middel',
                        icon: 'success',
                        title: 'Your account has been activated, thank you for registering with us, you can now log in :)',
                        showConfirmButton: false,
                        showConfirmButton:false,
                        timer:4000,
    
                        
                      })
                      setTimeout(() => {
                        window.location.href = "sign_in_users.html";
                      }, 3000);
                }
                else
                {
                    if($('#email').val().trim() == ""||$('#ID-Num').val().trim() == ""||$('#password').val().trim() == ""||$('#phone').val().trim() == ""||$('#card-num').val().trim() == ""||$('#c-email').val().trim() == ""||$('#c-password').val().trim() == "")
                {

                }
                else
                {
                    console.log(data);
                    Swal.fire({
                        position: 'middel',
                        icon: 'error',
                        title: 'Oops , The information you have entered is incorrect or this user is already registered , please try agin !! ',
                        showConfirmButton: false,
                        showConfirmButton:false,
                        timer:4000,
    
                        
                      })
                }
                   
                }
                
            }
            
            ,
            error:function()
            {
                if($('#email').val().trim() == ""||$('#ID-Num').val().trim() == ""||$('#password').val().trim() == ""||$('#phone').val().trim() == ""||$('#card-num').val().trim() == ""||$('#c-email').val().trim() == ""||$('#c-password').val().trim() == "")
                {

                }
                else
                {
                    Swal.fire({
                        position: 'middel',
                        icon: 'error',
                        title: 'Oops , The information you have entered is incorrect or this user is already registered , please try agin !! ',
                        showConfirmButton: false,
                        showConfirmButton:true
                        
                      })
                }
                
            }

        });

    });

  });