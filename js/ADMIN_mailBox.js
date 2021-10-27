
function myFunction(x,y) {
    var input, filter, table, tr, td,td2,td3, i, txtValue ,txtValue2,txtValue3;
    input = document.getElementById(`${y}`);
    filter = input.value.toUpperCase();
    table = document.getElementById(`${x}`);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td3=tr[i].getElementsByTagName("td")[2];
      td2=tr[i].getElementsByTagName("td")[3];
      
      if (td || td2) {
        txtValue = td.textContent || td.innerText;
        txtValue2=td2.textContent || td2.innerText;
        txtValue3=td3.textContent || td3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) >-1 || txtValue3.toUpperCase().indexOf(filter) >-1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


  $(document).ready(function(){
    $("#inbox").fadeIn(5);
    $("#sent-mail").fadeOut(5);
    $("#trash").fadeOut(5);
    $( "#inbox-icon" ).addClass( "active" );

    $("#inbox-icon").click(function(){
      $("#inbox").fadeIn(5);
      $("#sent-mail").fadeOut(5);
      $("#trash").fadeOut(5);
      $( "#sent-mail-icon" ).removeClass( "active" );	
      $( "#inbox-icon" ).addClass( "active" );
      $( "#trash-icon" ).removeClass( "active" );



     
    });

    $("#sent-mail-icon").click(function(){
      $("#inbox").fadeOut(5);
      $("#sent-mail").fadeIn(5);
      $("#trash").fadeOut(5);
      $( "#sent-mail-icon" ).addClass( "active" );	
      $( "#inbox-icon" ).removeClass( "active" );
      $( "#trash-icon" ).removeClass( "active" );



     
    });
    $("#trash-icon").click(function(){
      $("#inbox").fadeOut(5);
      $("#sent-mail").fadeOut(5);
      $("#trash").fadeIn(5);
      $( "#sent-mail-icon" ).removeClass( "active" );	
      $( "#inbox-icon" ).removeClass( "active" );
      $( "#trash-icon" ).addClass( "active" );


     
    });
  });



 



var sub=[];




  // function to display admin  info 
  function adminInfo(data)
  {
      $('#sidebar-adminName').text(data.Firstname +' '+data.Lastname);
      $('#nav-admin-name').text('Hello , '+data.Firstname +' '+data.Lastname);
      $('#inbox-counter').text(data.ContactUs.length);
      $('#send-counter').text(data.sentMessages.length);

      var n=0;
  
  
      for (let index = data.ContactUs.length-1; index >= 0; index--) {
        n+=1;
        var add_row=`<tr>`+`<td>${data.ContactUs[index].name}</td>`+`<td >${data.ContactUs[index].message.substring(0, 10)+'...'}</td>`+`<td>${data.ContactUs[index].email}</td>`+`<td class="date">${data.ContactUs[index].date}</td>` +`<td><button id='view-btn${index}' class="btn btn-success btn-sm mt-2" style="width:60px" >View</button><br><button id='${index}' class="btn btn-danger btn-sm mt-2" style="width:60px" >Delete</button></td>`+ `</tr>`;
      sub[index]=(data.ContactUs[index].message);
        $('#mailBox-table').append(add_row);
  
    }


  
    for (let index = data.sentMessages.length-1; index >= 0; index--){
      var add_row=`<tr>`+`<td>${data.sentMessages[index].name}<br><small>${data.sentMessages[index].email}</small></td>`+`<td >${data.sentMessages[index].message.substring(0, 10)+'...'}</td>`+`<td>${data.sentMessages[index].date}</td>` +`<td><button id='view-btn-send${index}' class="btn btn-success btn-sm mt-2" style="width:60px" >View</button>`+`</tr>`;
      $('#send-table').append(add_row);

  }

  for (let index = data.Trash.length-1; index >= 0; index--) {
    var add_row=`<tr>`+`<td>${data.Trash[index].name}</td>`+`<td >${data.Trash[index].message.substring(0, 10)+'...'}</td>`+`<td>${data.Trash[index].date}</td>` +`<td><button id='view-btn-trash${index}' class="btn btn-success btn-sm mt-2" style="width:60px" >View</button>`+ `</tr>`;
    $('#trash-table').append(add_row);

}

$('#checkAll').click(function () {    
  $(':checkbox.checkItem').prop('checked', this.checked);    
});
  
for (let index = data.ContactUs.length-1; index >= 0; index--){
document.getElementById(index).addEventListener("click",function(){
  
     var value=data.ContactUs[index].message
  $.ajax({
      type:'PATCH',
      url:'http://127.0.0.1:3002/api/admin/removeContact/',
      data:
      {
        item:value
      },
      success:function(data){
        console.log(data);
        location.reload();

      }
  });





});
}

for (let index = data.ContactUs.length-1; index >= 0; index--){
  document.getElementById('view-btn'+index).addEventListener("click",function(){
    
       
       
       localStorage.setItem("contactUS", index);
       localStorage.setItem("ms_info_type", 'ContactUs');
       window.location.href = "../../pages/admin/ADMIN_message_info.html";
    
    });

  }
  for (let index = data.sentMessages.length-1; index >= 0; index--){
    document.getElementById('view-btn-send'+index).addEventListener("click",function(){
      
         
         
         localStorage.setItem("contactUS", index);
         localStorage.setItem("ms_info_type", 'SendMessages');
         window.location.href = "../../pages/admin/ADMIN_message_info.html";
      
      });
  
    }
    for (let index = data.Trash.length-1; index >= 0; index--){
      document.getElementById('view-btn-trash'+index).addEventListener("click",function(){
        
           
           
           localStorage.setItem("contactUS", index);
           localStorage.setItem("ms_info_type", 'Trash');
           window.location.href = "../../pages/admin/ADMIN_message_info.html";
        
        });
    
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

console.log(sub);

 

 









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





 