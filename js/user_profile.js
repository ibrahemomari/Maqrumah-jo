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
  $('#id').text(data.ID);
  $('#major').text(data.Major);
  $('#university').text(data.university);
  $('#cumulativeHour').text(data.cumulativeHour);
  $('#total-requests').text(data.myRequest.length);
  $('#total-bills').text(data.bills.length);
  var totalIncome=0 , averageIncom=0;
  for (let index = 0; index < data.transferMoney.length; index++) {
    totalIncome+= parseFloat(data.transferMoney[index].amount)
    
  }
  $('#total-income').text(totalIncome +' JD');
  averageIncom=(totalIncome/data.myBalance) * 100; 
  if(averageIncom===Infinity)
    averageIncom=0;
  $('#average-income').text(averageIncom.toFixed(2) + "%");
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

$('#log-out').click(function () {

  localStorage.removeItem("userID");
});