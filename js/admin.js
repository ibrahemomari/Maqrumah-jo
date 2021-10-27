

$(function () {
    $("#btn-min").click(function () {
        
    
        document.getElementById('btn-min2').style.visibility='visible';
        document.getElementById('btn-min').style.visibility='hidden';
       
    });
});
$(function () {
    $("#btn-min2").click(function () {
        
    
        document.getElementById('btn-min').style.visibility='visible';
        document.getElementById('btn-min2').style.visibility='hidden';
       
    });
});

$(function () {
    $("#btn-stu").click(function () {
        
    
        document.getElementById('btn-stu2').style.visibility='visible';
        document.getElementById('btn-stu').style.visibility='hidden';
        
       
    });
});
$(function () {
    $("btn-stu2").click(function () {
        
    
        document.getElementById('btn-stu').style.visibility='visible';
        document.getElementById('btn-stu2').style.visibility='hidden';
       
    });
});



  


  




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
    $('#total-request').text(data.totalRequests);

      //get date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + '/' + mm + '/' + yyyy;

    for (let index = data.cashOutRequest.length-1; index >= data.cashOutRequest.length-5; index--) {
        var add_row=`<tr>`+`<td>${data.cashOutRequest[index].fName+' '+data.cashOutRequest[index].lName}</td>`+`<td>${data.cashOutRequest[index].date}</td>`+`<td class='text-success'>Cash Out</td>`+`</tr>`;
        $('#requests-table').append(add_row);

    }
    for (let index = data.clearanceRequest.length-1; index >= data.clearanceRequest.length-5; index--) {
        var add_row=`<tr>`+`<td>${data.clearanceRequest[index].fName+' '+data.clearanceRequest[index].lName}</td>`+`<td>${data.clearanceRequest[index].date}</td>`+`<td class='text-info'>clearance</td>`+`</tr>`;
        $('#requests-table').append(add_row);

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


function UsersInfo(data)
{
    $('#total-students').text(data.numStudents);

    for (let index = data.data.length-1; index >= 0; index--) {
        var add_row=`<tr>`+`<td>${data.data[index].ID}</td>`+`<td>${data.data[index].Firstname +' ' + data.data[index].Lastname}</td>`+`<td >${data.data[index].university}</td>`+`</tr>`;
        $('#students-table').append(add_row);

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

  
  $(document).ready(function (){

    $('#card1').mouseover(function(){
        $('#card2').addClass('blur');
        $('#card3').addClass('blur');
        $('#card4').addClass('blur');
       
    });
    $('#card1').mouseout(function(){
      $('#card2').removeClass('blur');
      $('#card3').removeClass('blur');
      $('#card4').removeClass('blur');
     
  });

  $('#card2').mouseover(function(){
    $('#card1').addClass('blur');
    $('#card3').addClass('blur');
    $('#card4').addClass('blur');
   
});
$('#card2').mouseout(function(){
  $('#card1').removeClass('blur');
  $('#card3').removeClass('blur');
  $('#card4').removeClass('blur');
 
});

$('#card3').mouseover(function(){
  $('#card2').addClass('blur');
  $('#card1').addClass('blur');
  $('#card4').addClass('blur');
 
});
$('#card3').mouseout(function(){
$('#card2').removeClass('blur');
$('#card1').removeClass('blur');
$('#card4').removeClass('blur');

});

$('#card4').mouseover(function(){
  $('#card2').addClass('blur');
  $('#card3').addClass('blur');
  $('#card1').addClass('blur');
 
});
$('#card4').mouseout(function(){
$('#card2').removeClass('blur');
$('#card3').removeClass('blur');
$('#card1').removeClass('blur');

});
    
  });