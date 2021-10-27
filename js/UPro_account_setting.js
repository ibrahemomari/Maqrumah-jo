var dropdown = document.getElementsByClassName("dropdown");
var item = document.getElementsByClassName("ser-item");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active1");
  this.classList.toggle("slide-fwd-center");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  
  } else {
  dropdownContent.style.display = "block";

  }
  });
}


//change password variable
var password ,c_password; 
// phone cod variable
var e = document.getElementById("phone_code");

var n_id ,f_name,father_name,l_name,uni_name,country_code , email ,phone;
//get value
n_id=document.getElementById('No-num').value;
f_name=document.getElementById('f-name').value;
father_name=document.getElementById('father-name').value;
l_name=document.getElementById('l-name').value;
uni_name=document.getElementById('uni-name').value;
email=document.getElementById('email').value;
phone=document.getElementById('phone').value;



document.getElementById('No-num').disabled=true;
document.getElementById('f-name').disabled=true;
document.getElementById('father-name').disabled=true;
document.getElementById('l-name').disabled=true;
document.getElementById('uni-name').disabled=true;
document.getElementById('email').disabled=true;
document.getElementById('phone_code').disabled=true;
document.getElementById('phone').disabled=true;

// change email button


$(function () {
    $("#btn-change-email").click(function () {
        
        document.getElementById('email').disabled=false;
        document.getElementById('btn-change-email').style.visibility='hidden';
        document.getElementById('btn-save-email').style.visibility='visible';
        document.getElementById('btn-cancel-email').style.visibility='visible';
    });
});
// save email button
$(function () {
    $("#btn-save-email").click(function () {
        var new_email=document.getElementById('email').value;
        email=new_email;
        document.getElementById('email').value=email;

        document.getElementById('email').disabled=true;
        document.getElementById('btn-change-email').style.visibility='visible';
        document.getElementById('btn-save-email').style.visibility='hidden';
        document.getElementById('btn-cancel-email').style.visibility='hidden';
       
    });
});
// cancel email button
$(function () {
    $("#btn-cancel-email").click(function () {
        
        document.getElementById('email').disabled=true;
        document.getElementById('btn-change-email').style.visibility='visible';
        document.getElementById('btn-save-email').style.visibility='hidden';
        document.getElementById('btn-cancel-email').style.visibility='hidden';
        document.getElementById('check').style.visibility='hidden';
        document.getElementById('email').value=email;
    });
});

//email validation 
$(function()
{
    $("#email").change(function ()
    {
        var n_email=document.getElementById('email').value;
        var pattern=/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        
        
        if(String(n_email).search(pattern)!=-1)
           {
            console.log(n_email);
            document.getElementById('btn-save-email').disabled=false;
            document.getElementById('check').innerHTML='<i class="fa fa-check" aria-hidden="true" style="color:green; margin-top:10px;margin-left:6px;"></i>';
           }
        else
        {
            document.getElementById('btn-save-email').disabled=true;
            document.getElementById('check').innerHTML='<i class="fa fa-times" aria-hidden="true" style="color:red; margin-top:10px;margin-left:6px;"></i>';
            
        }

    });
});

// change phone button
$(function () {
    $("#btn-change-phone").click(function () {

        document.getElementById('phone').disabled=false;
        document.getElementById('phone_code').disabled=false;
        document.getElementById('btn-change-phone').style.visibility='hidden';
        document.getElementById('btn-save-phone').style.visibility='visible';
        document.getElementById('btn-cancel-phone').style.visibility='visible';
        
    });
});
// save phone button
$(function () {
    $("#btn-save-phone").click(function () {
        var new_phone=document.getElementById('phone').value;
        phone=new_phone;
        document.getElementById('phone').value=phone;

        document.getElementById('phone').disabled=true;
        document.getElementById('phone_code').disabled=true;
        document.getElementById('btn-change-phone').style.visibility='visible';
        document.getElementById('btn-save-phone').style.visibility='hidden';
        document.getElementById('btn-cancel-phone').style.visibility='hidden';
        
    });
});

// cancel phone button
$(function () {
    $("#btn-cancel-phone").click(function () {
        
        document.getElementById('phone').disabled=true;
        document.getElementById('btn-change-phone').style.visibility='visible';
        document.getElementById('btn-save-phone').style.visibility='hidden';
        document.getElementById('btn-cancel-phone').style.visibility='hidden';
        document.getElementById('check2').style.visibility='hidden';
        document.getElementById('phone_code').disabled=true;
        document.getElementById('phone').value=phone;
    });
});

//phone validation 
$(function()
{
    $("#phone").change(function ()
    {
        var n_phone=document.getElementById('phone').value;
        var pattern=/^[0-9]{9}$|^[0-9]{10}$/;
        
        
        if(String(n_phone).search(pattern)!=-1)
           {
            document.getElementById('btn-save-phone').disabled=false;
            document.getElementById('check2').innerHTML='<i class="fa fa-check" aria-hidden="true" style="color:green; margin-top:10px;margin-left:6px;"></i>';
           }
        else
        {
            document.getElementById('btn-save-phone').disabled=true;
            document.getElementById('check2').innerHTML='<i class="fa fa-times" aria-hidden="true" style="color:red; margin-top:10px;margin-left:6px;"></i>';
            
        }

    });
});



password=document.getElementById('password').value;
c_password=document.getElementById('c-password').value;

// get the phone code with plus(+) sign
$("#phone_code").change(function()
{
   country_code ='+'+ e.options[e.selectedIndex].value;

});

var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

document.getElementById('change-pass-btn').disabled=true;
$(function () {
    $("#c-password").focusout(function () {
        var password = $("#password").val();
        var confirmPassword = $("#c-password").val();
        var currentPassword=$("#current-pass").val();

        
        if (password != confirmPassword) {
            $("#c-password").notify(
                "the password not match", 
                { position:"bottom left", className:'error' }
              );
            return false;
        }
        else if(password==='' || password ===' ' || confirmPassword==='' || confirmPassword===' ' ||currentPassword==='' || currentPassword===' '  )
        {
            document.getElementById('change-pass-btn').disabled=true;

        }
        // else if(mediumRegex.test(password))
        else
        {
            document.getElementById('change-pass-btn').disabled=false;
            return true;
            

        }
    });
    $("#password").focusout(function () {
        var password = $("#password").val();
        if(mediumRegex.test(password)===false)
        {
            $("#password").notify(
                "this password not valid", 
                { position:"top rigth", className:'error' }
              );
              
        }


    });

});



/**
 
{status: "success", user: {…}}
status: "success"
user:
Fathername: "ameen"
Firstname: "abdulfattah"
ID: 9998343552
Lastname: "al-qaisi"
Major: "Finance Banking"
bills: (4) [{…}, {…}, {…}, {…}]
creditHour: 132
cumulativeHour: 45
email: "abd@gmail.com"
myBalance: 600
myRequest: (4) [{…}, {…}, {…}, {…}]
password: "$2b$10$fVdFZf7.7JO1fPW1crX7pus1BW1Y8p2rX6ksqYM9PEm9QvdBjhXgu"
personalCardNumber: "ols82047"
phonenumber: "0791750668"
token: "eyJhbGciOiJIUzI1NiJ9.NWZhZDc2MDNkNzVjMzYxNDEwMGFkOWNh.Rds6Yt5atXqO-NyKJeON8Jc5A_b3-W-Lb7BaGU68rzY"
university: "Al Al-Bayt University"
__v: 0
_id: "5fad7603d75c3614100ad9ca"
 */



var userID= localStorage.getItem("userID");

// function to display student  info 
function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);
  $('#cach').text(data.myBalance +' JD');
  $('#No-num').val(data.ID);
  $('#f-name').val(data.Firstname);
  $('#father-name').val(data.Fathername);
  $('#l-name').val(data.Lastname);
  $('#uni-name').val(data.university);
  $('#email').val(data.email);
  $('#phone').val(data.phonenumber);

  




}

$(function(){

  $.ajax({
    type:'GET',
    url:`http://127.0.0.1:3002/api/users/getUser/${userID}`,
  
    success(data)
    {
      studentInfo(data.user);
      console.log(data);
    }

  });


});


$('#change-pass-btn').click(function(){

    var current = $('#current-pass').val();
    var New=$('#password').val();
    var passChange= 
    {
        passwordCurrent: current,
        password:New
    
    };
   
console.log(passChange);

    $.ajax({

        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/updatePasswordUser/${userID}`,
        data:passChange
        ,
        success:function(data)
        {
            if(data.loginSuccess===false)
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops , the current password is not match !!',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
            else 
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The password has been changed successfully',
                    showConfirmButton: false,
                    timer: 2000
                  });
                  setTimeout(() => {
                    location.reload();
                  }, 2000);
                  
                }
        }
        ,
        error:function()
        {
            alert('error');
        }
    });



});




$('#btn-save-email').click(function(){

    var new_mail = $('#email').val();
    var array=[];
  
console.log(new_mail);

    $.ajax({

        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/updateSettingUser/${userID}`,
        data:
        {
           email:new_mail,
         

        }
        ,
        success:function(data)
        {
            console.log(data);
            $.notify(
                `Email changed successfully`, 
                 
                { position:"right bottom",className: 'success' },
                 
                
              );
        }
        ,
        error:function()
        {
            alert('error');
        }
    });



});




$('#btn-save-phone').click(function(){

    var new_phone = $('#phone').val();
  

    $.ajax({

        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/updateSettingUser/${userID}`,
        data:
        {
            phonenumber:new_phone
        }
        ,
        success:function(data)
        {
            $.notify(
                `Phone number changed successfully`, 
                 
                { position:"right bottom",className: 'success' },
                 
                
              );
        }
        ,
        error:function()
        {
            alert('error');
        }
    });



});




$('#log-out').click(function () {

    localStorage.removeItem("userID");
  });