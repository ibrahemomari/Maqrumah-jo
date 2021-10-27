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


var x=localStorage.getItem('student_profile');



function UsersInfo(data)
{
    console.log(data.data[x]);
    $('#name').text(data.data[x].Firstname+' '+data.data[x].Lastname);
    $('#major').text(data.data[x].Major);
    $('#idNum').text(data.data[x].ID);
    $('#fullName').text(data.data[x].Firstname+' '+data.data[x].Fathername+' '+data.data[x].Lastname);
    $('#email').text(data.data[x].email);
    $('#phoneNumber').text(data.data[x].phonenumber);
    $('#creditHours').text(data.data[x].creditHour);
    $('#cumulativeHours').text(data.data[x].cumulativeHour);
    $('#balance').text(data.data[x].myBalance);
    $('#university').text(data.data[x].university)


    
  for (let index = data.data[x].myRequest.length-1; index >=data.data[x].myRequest.length-5; index--) {
    var date,type,balance;
    date= data.data[x].myRequest[index].date;
    type= data.data[x].myRequest[index].type;
    balance=data.data[x].myRequest[index].balance + 'JD';
    if(balance===undefined+'JD')
    {
        balance='Clearance'
    }

    var add_row=`<div class="row"><div class="col-md-4">${date}</div><div class="col-md-4">${type}</div><div class="col-md-4">${balance}</div></div><hr>`;

    $('#requests').append(add_row);
  }

  for (let index = data.data[x].bills.length-1; index >= data.data[x].bills.length-5; index--) {
    var date,type,balance ,add_row;
    date= data.data[x].bills[index].date;
    type= data.data[x].bills[index].type;
    balance=data.data[x].bills[index].balance + 'JD';
    if(type === undefined )
    {
        type='Transfer Money'
        add_row=`<div class="row"><div class="col-md-4">${date}</div><div class="col-md-4">${type}</div><div class="col-md-4">${balance}</div></div><hr>`;

    }

     add_row=`<div class="row"><div class="col-md-4">${date}</div><div class="col-md-4">${type}</div><div class="col-md-4">${balance}</div></div><hr>`;

    $('#bills').append(add_row);
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