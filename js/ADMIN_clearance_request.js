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
    table = document.getElementById("clearance-table");
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
    $('#total-clearance-requests').text(data.clearanceRequest.length)


    for (let index = data.clearanceRequest.length-1; index >= 0; index--) {
      var add_row=`<tr>`+`<td>${data.clearanceRequest[index].date}</td>`+`<td>${data.clearanceRequest[index].ID}</td>`+`<td>${data.clearanceRequest[index].fName +' ' +data.clearanceRequest[index].lName}</td>`+`<td >${data.clearanceRequest[index].University}</td>`+`<td>${data.clearanceRequest[index].type}</td>` + `</tr>`;
      $('#clearance-table').append(add_row);

  }


  
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