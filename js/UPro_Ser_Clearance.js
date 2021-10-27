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

// get reason
var reason;
var btn = document.getElementById("btn-send");
var e = document.getElementById("selected-menu");


btn.disabled=true;
btn.style.cursor='no-drop';
$("#selected-menu").change(function()
{
  reason =e.options[e.selectedIndex].value;


   if(reason!=='Choose')
   {
       btn.disabled=false;
       btn.style.cursor='pointer';
        
   }
   else
   {
    btn.disabled=true;
    btn.style.cursor='no-drop';
   }
});




var userID= localStorage.getItem("userID");


  





function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);
 
  $("#btn-send").click(function(){
    //get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
   
    today = dd + '/' + mm + '/' + yyyy;
    //get type
    var e = document.getElementById("selected-menu");
    var type =e.options[e.selectedIndex].value;
    

    
    

     $.ajax({
        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/Clearance/${userID}`,
        data:
        {
          type:type,
          ID: data.ID,
          University: data.university,
          fName:data.Firstname,
          MName:data.Fathername,
          lName:data.Lastname,
          date:today
     
        }
        ,
        success:function(data){
          console.log(data);
          $.notify(
            `Request sended successfully`, 
             
            { position:"right bottom",className: 'success' },
             
            
          );

        }
        ,
        error:function()
        {
          $('#status').text('error');
        }
      })
  });


}


$(function(){

  $.ajax({
    type:'GET',
    url:`http://127.0.0.1:3002/api/users/getUser/${userID}`,
  
    success(data)
    {
      studentInfo(data.user);
    }

  });


});

$('#log-out').click(function () {

  localStorage.removeItem("userID");
});