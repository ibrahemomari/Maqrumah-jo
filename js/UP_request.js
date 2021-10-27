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




$('#search-fillter').keyup(function() {
    var input, filter, table, tr, td,td2,td3, i, txtValue,txtValue2,txtValue3;
    input = document.getElementById("search-fillter");
    filter = input.value.toUpperCase();
    table = document.getElementById("request-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td2=tr[i].getElementsByTagName("td")[1];
      td3=tr[i].getElementsByTagName("td")[2];
      if (td || td2 || td3) {
        txtValue = td.textContent || td.innerText;
        txtValue2=td2.textContent || td2.innerText;
        txtValue3=td3.textContent || td3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1|| txtValue2.toUpperCase().indexOf(filter) >-1 || txtValue3.toUpperCase().indexOf(filter) >-1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
    
 });





 
var userID= localStorage.getItem("userID");



function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);

    //get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;




  for (let index = data.myRequest.length-1; index >= 0; index--) {
    var date,type;
    date= data.myRequest[index].date;
    type= data.myRequest[index].type;
    if(type==='bank' || type==='Electronic-wallet' || type==='credit-card')
    {
      type='Cash Out'.fontcolor("green").bold(4)
    }
    else if (type==='graduating from university' || type=== 'Transferring from one major to another')
    {
      type=('Clearance ('+type+')').fontcolor("blue");
    }
    else if(type===null || type==undefined)
    {
      type='This request does not exist'.toUpperCase().fontsize(5).fontcolor("red") ;
      
    }
    var add_row=`<tr>`+`<td>${date}</td>`+`<td>${type}</td>`+`<td class="text-success">Done</td>`+`</tr>`;

    $('#request-table').append(add_row);

    
  }





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




$(document).ready(function() {

  var done = $(".done").addClass( "text-success" ).attr("id");
  var waiting = $(".waiting").addClass( "text-warning" ).attr("id");
  var denied = $(".denied").addClass( "text-danger" ).attr("id");


})

