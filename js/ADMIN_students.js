var dropdown = document.getElementsByClassName("dropdown");

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

  }none
  });
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-fillter");
    filter = input.value.toUpperCase();
    table = document.getElementById("student-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


// function to display admin  info 
function adminInfo(data)
{
    $('#sidebar-adminName').text(data.Firstname +' '+data.Lastname);
    $('#nav-admin-name').text('Hello , '+data.Firstname +' '+data.Lastname);
    


  


  
}

$(function(){

  $.ajax({
    type:'GET',
    url:`http://127.0.0.1:3002/api/admin/getAdmin/`,
  
    success(data)
    {
      console.log(data);
      adminInfo(data.admin);
    }

  });


});
  function UsersInfo(data)
{
   
  $('#total-students').text(data.numStudents);
  var total_balance=0 , average_balance;
  for (let index = 0; index < data.data.length; index++) {
    total_balance=total_balance+data.data[index].myBalance;
    
    
  }
  $('#total-balance').text(total_balance + ' JD');
  
  average_balance=total_balance/data.data.length;
  $('#average-balance').text(average_balance.toFixed(2)+' JD');



  for (let index = data.data.length-1; index >= 0; index--){
        var add_row=`<tr>`+`<td>${data.data[index].ID}</td>`+`<td>${data.data[index].Firstname +' ' + data.data[index].Lastname}</td>`+`<td >${data.data[index].university}</td>`+`<td><a href="#" id="${index}" class="btn btn-warning btn-sm">View Profile</a></td>`+`</tr>`;
        $('#student-table').append(add_row);

    }

    for (let index = data.data.length-1; index >= 0; index--){
    var viwe_profile=document.getElementById(index);
        viwe_profile.addEventListener('click',function(){
          
          localStorage.setItem("student_profile", index);
          window.location.href = "../../pages/admin/ADMIN_student_profile.html";


        });
      }

}


$(function(){

    $.ajax({
      type:'GET',
      url:`http://127.0.0.1:3002/api/admin/getUsers/`,
    
      success(data)
      {
        console.log(data);
        UsersInfo(data);
        
      }
  
    });
  
  
  });

