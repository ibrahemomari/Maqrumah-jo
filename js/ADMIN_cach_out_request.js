function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-fillter");
    filter = input.value.toUpperCase();
    table = document.getElementById("cach-out-table");
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








  // function to display admin  info 
function adminInfo(data)
{
    $('#sidebar-adminName').text(data.Firstname +' '+data.Lastname);
    $('#nav-admin-name').text('Hello , '+data.Firstname +' '+data.Lastname);
    $('#total-cash-out-requests').text(data.cashOutRequest.length);
    var total_cash_out_balance=0;
   


    for (let index = data.cashOutRequest.length-1; index >= 0; index--) {
      var add_row=`<tr>`+`<td>${data.cashOutRequest[index].date}</td>`+`<td>${data.cashOutRequest[index].ID}</td>`+`<td>${data.cashOutRequest[index].fName +' ' +data.cashOutRequest[index].lName}</td>`+`<td >${data.cashOutRequest[index].type}</td>`+`<td>${data.cashOutRequest[index].balance}</td>` + `</tr>`;
      $('#cach-out-table').append(add_row);
      total_cash_out_balance+=parseFloat(data.cashOutRequest[index].balance);

  }
  $('#total-cash-out-balance').text(total_cash_out_balance + ' JD');


  
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