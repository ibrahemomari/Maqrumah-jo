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


var btn_balance=[];

function studentInfo(data)
{
  $('#slider-student-name').text(data.Firstname +' '+ data.Lastname);
  $('#nav-user-name').text(data.Firstname +' '+ data.Lastname);
  $('#Bname').text(data.Firstname +' '+data.Fathername+' '+ data.Lastname);
  $('#Bmajor').text(data.Major);


    //get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    var btn_id=1;
    var td_date=1;
    var td_type=1;

    
  for (let index = data.bills.length-1; index >= 0; index--) {
    var date,type;
    date= today;
    type= data.bills[index].type;
    var add_row;
    if(type === undefined )
    {
      type='Transfer Money to ( '+ data.bills[index].ID +' )' +'<br><h6 style="color:green">('+ data.bills[index].balance +' JD)</h6>' ,
      add_row=`<tr>`+`<td id="D${td_date}">${data.bills[index].date}</td>`+`<td id="T${td_type}">${type}</td>`+`<td><a href="#" class="btn btn-warning btn-sm disabled" id="${btn_id}" onClick="bills_info(this.id,${data.bills[index].balance})" >view details</a></td>`+`</tr>`;
    }
    else
    {
      add_row=`<tr>`+`<td id="D${td_date}">${data.bills[index].date}</td>`+`<td id="T${td_type}">${type}</td>`+`<td><a href="#" class="btn btn-warning btn-sm" id="${btn_id}" onClick="bills_info(this.id,${data.bills[index].balance})">view details</a></td>`+`</tr>`;

    }

    $('#bills-table').append(add_row);
    btn_balance.push(data.bills[index].balance); 

    btn_id+=1; td_date+=1; td_type+=1;

   
    
  }

 

}


function bills_info(id,balance)
{
   
    localStorage.setItem("balance",balance);
 


  window.location.href = "../../pages/user/UP_bills_info.html";  

}



$('#amount').text(localStorage.getItem("balance"))


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