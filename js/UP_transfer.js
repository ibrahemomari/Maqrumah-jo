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






document.getElementById('send-btn').disabled=true;








var userID= localStorage.getItem("userID");

// function to display student  info 
function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);
  $('#cach').text(data.myBalance +' JD');
  var amount;
  var id;
  

  $(function()
  {
      $("#amount").keyup(function ()
      {
          
           amount=parseFloat(document.getElementById('amount').value);
           id=document.getElementById('ID').value;
  
          if(amount<=0 )
             {
                 
              document.getElementById('send-btn').disabled=true;
              document.getElementById('cach-input-error').innerHTML='<i class="fa fa-times" aria-hidden="true" style="color:red; margin-top:10px;margin-left:6px;"></i>';
              document.getElementById('amount').style.border='1px solid red';
             }
          else if(amount>data.myBalance)
          {
              document.getElementById('send-btn').disabled=true;
             
              document.getElementById('cach-input-error').innerHTML='<span style="color:red; margin-top:10px;margin-left:6px;">Sorry,Your balance is not enough</span>';
              document.getElementById('amount').style.border='1px solid red';
          }
          // else if(amount<10)
          // {
          //     document.getElementById('send-btn').disabled=true;
          //     document.getElementById('cach-input-error').innerHTML='<span style="color:red; margin-top:10px;margin-left:6px;">Sorry,The amount should be at least 10 JD </span>';
          //     document.getElementById('amount').style.border='1px solid red';
          // }
          else if(!amount )
          {
              document.getElementById('send-btn').disabled=true;
              document.getElementById('cach-input-error').innerHTML='<span style="color:red; margin-top:10px;margin-left:6px;">Empty!!</span>';
              document.getElementById('amount').style.border='1px solid red';
          }
         
          else
          {
              
              document.getElementById('send-btn').disabled=false;
              document.getElementById('cach-input-error').innerHTML='';
              document.getElementById('amount').style.border='1px solid green';
          }
          if (!id)
          {
            document.getElementById('send-btn').disabled=true;

          }
          
  
   
      });
  });

  $(function()
  {
    $("#ID").keyup(function (){
        id=document.getElementById('ID').value;
        var pattern = new RegExp("^[0-9]{10}$");


        if(!id )
          {
              document.getElementById('send-btn').disabled=true;
              document.getElementById('id-input-error').innerHTML='<span style="color:red; margin-top:10px;margin-left:6px;">Empty!!</span>';
          }
        else if(!pattern.test(id))
        {
            document.getElementById('send-btn').disabled=true;
            document.getElementById('id-input-error').innerHTML='<span style="color:red; margin-top:10px;margin-left:6px;">Wrong ID !!</span>';
        }
        else
        {
              document.getElementById('send-btn').disabled=false;
              document.getElementById('id-input-error').innerHTML='';
        }

        if (!amount)
        {
          document.getElementById('send-btn').disabled=true;

        }
        

    });
    


  });

  var notiUser;

  $('#send-btn').click(function(){

  
      var value=parseInt($('#amount').val());
      //get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

     $.ajax({
        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/transferMoney/${userID}`,
        data:
        {
          ID:id,
          balance:value
     
        }
        ,
        success:function(data){
          if(data.done===true)
          {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `An amount (${value}) has been transferred to (${id}) successfully`,
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout(() => {
              location.reload();
            }, 2000);

          
            

            localStorage.setItem("transfer amount",value);
            localStorage.setItem("transfer resiver id",id);
          }
          else
          {
            $("#ID").notify(
              "this ID not found !!", 
              { position:"top rigth", className:'error' }
            );
          }
          

        }
        ,
        fail:function()
        {
          alert('errrrrrrrrrrrror');
        },
        error:function()
        {
          $('#status').text('error');
        }
      });
    
    
 });

}

$(function(){

  $.ajax({
    type:'GET',
    url:`http://127.0.0.1:3002/api/users/getUser/${userID}`,
  
    success(data)
    {
      console.log(data);
      studentInfo(data.user);
      localStorage.setItem("transfer sender id",data.user.ID);

    }

  });


});


$('#log-out').click(function () {

  localStorage.removeItem("userID");
});