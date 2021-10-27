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




var userID= localStorage.getItem("userID");

// function to display student  info 
function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);
  $('#Specialization').text(data.Major);
  $('#n-h-s-p').text(data.creditHour);
  $('#c-t-h').text(data.cumulativeHour)
  $('#c-t-r-h').text(data.creditHour-data.cumulativeHour)
}

$(function(){

  $.ajax({
    type:'GET',
    url:`http://127.0.0.1:3002/api/users/getUser/${userID}`,
  
    success(data)
    {
      console.log(data);
      studentInfo(data.user);
    }

  });


});

