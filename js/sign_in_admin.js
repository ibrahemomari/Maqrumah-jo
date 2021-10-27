$(function(){
    document.getElementById('waiting').style.visibility='hidden'; 

$('#login-btn').on('click',function()
{
    var email = $('#email').val();
    var psssword=$('#password').val();
    var login= 
    {
        email: email,
        password:psssword
        
    };

    $.ajax({
        type:'POST',
        url:'http://127.0.0.1:3002/api/admin/login',
        data:
        {
            email:login.email,
            password:login.password
        }
        ,
        success:function(data)
        {
           
           console.log(data);
           
           document.getElementById('login-btn').style.visibility='hidden';
           document.getElementById('waiting').style.visibility='visible';

           if(data.loginSuccess===false)
           {
            document.getElementById('waiting').style.visibility='hidden';
            document.getElementById('login-btn').style.visibility='visible';
            document.getElementById('error').textContent=data.message;
            $.notify(
                `${data.message}`, 
                
                { position:"right bottom"  },
                
              );

           }
           else 
           {
            localStorage.setItem("adminID",'5fad75f6d75c3614100ad9c9');
            setTimeout(function(){ window.location.href = "../../pages/admin/admin.html";}, 3000);
            $.notify(
                `Login Success`, 
                 
                { position:"right bottom",className: 'success' },
                 
                
              );

           }

           
        }
        ,
        fail:function()
        {
            alert('error');

        }
        ,
        error:function()
        {
            alert('error');
        }
     });



})




});




