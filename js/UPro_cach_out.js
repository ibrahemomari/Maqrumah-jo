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





// entry cach amount validation
var amount ,amount2,amount3 ,method,balance;


var e = document.getElementById("method");


document.getElementById('method-body').style.visibility='hidden';
document.getElementById('method-body2').style.visibility='hidden';
document.getElementById('method-body3').style.visibility='hidden';
// get the method way

$("#method").change(function()
{
  method =e.options[e.selectedIndex].value;
  
  if(method==='bank')
  {
    document.getElementById('method-body').style.visibility='visible';
    document.getElementById('method-body2').style.visibility='hidden';
    document.getElementById('method-body3').style.visibility='hidden';
  }
  else if(method==='credit-card')
  {
    document.getElementById('method-body').style.visibility='hidden';
    document.getElementById('method-body2').style.visibility='visible';
    document.getElementById('method-body3').style.visibility='hidden';
  }
  else if(method==='Electronic-wallet')
  {
    document.getElementById('method-body').style.visibility='hidden';
    document.getElementById('method-body2').style.visibility='hidden';
    document.getElementById('method-body3').style.visibility='visible';
  }
  else
  {
    document.getElementById('method-body').style.visibility='hidden';
    document.getElementById('method-body2').style.visibility='hidden';
    document.getElementById('method-body3').style.visibility='hidden';
  }
 
});




var userID= localStorage.getItem("userID");

function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);
  $('#cach').text(data.myBalance +' JD');

  

}

// function to display student  info 
function cash_out(data,type,balance)
{
  




  //get date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
 
  today = dd + '/' + mm + '/' + yyyy;
  
     

      $.ajax({

        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/CashOut/${userID}`,
        data:
        {
            type:type,
            balance:balance,
            ID:data.ID,
            Major:data.Major,
            fName:data.Firstname,
            MName:data.FatherName,
            lName:data.Lastname,
            date:today
        },
        success:function(data){
          $.notify(
            `Request sended successfully`, 
             
            { position:"right bottom",className: 'success' },
             
            
          );
        }




      });





}

$(function(){

  $.ajax({
    type:'GET',
    url:`http://127.0.0.1:3002/api/users/getUser/${userID}`,
  
    success(data)
    {
      studentInfo(data.user);
      get_balance(data.user.myBalance);
      var balance;
      console.log(data);
      $('#btn-bank').click(function(){
        balance=parseFloat($('#cach-input').val());
        if(balance<=0 || balance <10)
          {
            document.getElementById('btn-bank').disabled=true;

          }
        cash_out(data.user,method,balance);
       

      });
      $('#btn-credit-card').click(function(){
        balance=parseFloat($('#cach-input2').val());
        if(balance<=0 || balance <10)
          {
            document.getElementById('btn-bank').disabled=true;

          }
        cash_out(data.user,method,balance);
       

      });
      $('#btn-wallet').click(function(){
        balance=parseFloat($('#cach-input3').val());
        if(balance<=0 || balance <10)
          {
            document.getElementById('btn-bank').disabled=true;

          }
        cash_out(data.user,method,balance);
       

      });

     
    }

  });


});





document.getElementById('btn-bank').disabled=true;
document.getElementById('btn-credit-card').disabled=true;
document.getElementById('btn-wallet').disabled=true;


function get_balance(cach)
  {
     // cach amount validation (bank)
$(function()
{
    $("#cach-input").change(function ()
    {
      
         amount=parseFloat(document.getElementById('cach-input').value);

        if(amount<=0)
           {
            document.getElementById('btn-bank').disabled=true;
            $.notify(
              `Invalid amount , try agin !!`, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input').style.border='1px solid red';
           }
        else if(amount>cach)
        {
            document.getElementById('btn-bank').disabled=true;
           
            $.notify(
              `Sorry,Your balance is not enough`, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input').style.border='1px solid red';
        }
        else if(amount<10)
        {
            document.getElementById('btn-bank').disabled=true;
            $.notify(
              `Sorry,The amount should be at least 10 JD `, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input').style.border='1px solid red';
        }
        else
        {
            document.getElementById('btn-bank').disabled=false;
            document.getElementById('cach-input-error').innerHTML='';
            document.getElementById('cach-input').style.border='1px solid green';
        }
 
    });
});




// cach amount validation (credit card)
$(function()
{
    
    $("#cach-input2").change(function ()
    {
       
         amount2=parseFloat(document.getElementById('cach-input2').value);

        if(amount2<=0)
           {
            document.getElementById('btn-credit-card').disabled=true;
            $.notify(
              `Invalid amount , try agin !!`, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input2').style.border='1px solid red';
           }
        else if(amount2>cach)
        {
            document.getElementById('btn-credit-card').disabled=true;
            $.notify(
              `Sorry,Your balance is not enough`, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input2').style.border='1px solid red';
        }
        else if(amount2<10)
        {
            document.getElementById('btn-credit-card').disabled=true;
            $.notify(
              `Sorry,The amount should be at least 10 JD `, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input2').style.border='1px solid red';
        }
        else
        {
            document.getElementById('btn-credit-card').disabled=false;
            document.getElementById('cach-input-error2').innerHTML='';
            document.getElementById('cach-input2').style.border='1px solid green';
        }
 
    });
});
// cach amount validation (wallet)
$(function()
{
    $("#cach-input3").change(function ()
    {
         amount3=parseFloat(document.getElementById('cach-input3').value);

        if(amount3<=0)
           {
            document.getElementById('btn-wallet').disabled=true;
            document.getElementById('btn-bank').disabled=true;
            $.notify(
              `Invalid amount , try agin !!`, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input3').style.border='1px solid red';
           }
        else if(amount3>cach)
        {
            document.getElementById('btn-wallet').disabled=true;
            $.notify(
              `Sorry,Your balance is not enough`, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input3').style.border='1px solid red';
        }
        else if(amount3<10)
        {
            document.getElementById('btn-wallet').disabled=true;
            $.notify(
              `Sorry,The amount should be at least 10 JD `, 
               
              { position:"right bottom",className: 'error' },
               
              
            );
            document.getElementById('cach-input3').style.border='1px solid red';
        }
        else
        {
            document.getElementById('btn-wallet').disabled=false;
            document.getElementById('cach-input-error3').innerHTML='';
            document.getElementById('cach-input3').style.border='1px solid green';
        }
 
    });
});


  }


  $('#log-out').click(function () {

    localStorage.removeItem("userID");
  });