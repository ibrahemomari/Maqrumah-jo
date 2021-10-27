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


var x=localStorage.getItem('contactUS');
var y=localStorage.getItem('ms_info_type');
console.log(y);


function messageInfo(data)
{
    if(y==='ContactUs')
    {
        var title = data.ContactUs[x].message.substring(0, 25)+'...';
        $('#title').text(title);
        $('#G-title').text(title);
        $('#name').text(data.ContactUs[x].name);
        $('#date').text(data.ContactUs[x].date);
        $('#message').text(data.ContactUs[x].message);
        $('#email').text(data.ContactUs[x].email);

        $('#delete').click(function(){
            var value=data.ContactUs[x].message;
            
            Swal.fire({
                title: 'Do you want to delete this message?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: `Delete`,
                confirmButtonColor: '#d33',

                
              }).then((result) => {
                
                if (result.isConfirmed) {
                    $.ajax({
                        type:'PATCH',
                        url:'http://127.0.0.1:3002/api/admin/removeContact/',
                        data:
                        {
                          item:value
                        },
                        success:function(data){
                          console.log(data);
                         
                  
                        }
                    });
                  Swal.fire(
                      {
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                      }
                      

                  )
                  window.location.href = "../../pages/admin/ADMIN_mailBox.html";
                } 
              })






            
        });
    }

    else if(y==='SendMessages')
    {
        var title = data.sentMessages[x].message.substring(0, 25)+'...';
        $('#title').text(title);
        $('#G-title').text(title);
        $('#name').text(data.sentMessages[x].name);
        $('#date').text(data.sentMessages[x].date);
        $('#message').text(data.sentMessages[x].message);
        $('#email').text(data.sentMessages[x].email);

        $('#delete').click(function(){
            var value=data.sentMessages[x].message;
            
            Swal.fire({
                title: 'Do you want to delete this message?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: `Delete`,
                confirmButtonColor: '#d33',

                
              }).then((result) => {
                
                if (result.isConfirmed) {
                    $.ajax({
                        type:'PATCH',
                        url:'http://127.0.0.1:3002/api/admin/removeContact/',
                        data:
                        {
                          item:value
                        },
                        success:function(data){
                          console.log(data);
                         
                  
                        }
                    });
                  Swal.fire(
                      {
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                      }
                      

                  )
                  window.location.href = "../../pages/admin/ADMIN_mailBox.html";
                } 
              })






            
        });
    }
    else if (y==='Trash')
    {
        var title = data.Trash[x].message.substring(0, 25)+'...';
        $('#title').text(title);
        $('#G-title').text(title);
        $('#name').text(data.Trash[x].name);
        $('#date').text(data.Trash[x].date);
        $('#message').text(data.Trash[x].message);
        $('#email').text(data.Trash[x].email);

        $('#delete').click(function(){
            var value=data.Trash[x].message;
            
            Swal.fire({
                title: 'Do you want to delete this message?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: `Delete`,
                confirmButtonColor: '#d33',

                
              }).then((result) => {
                
                if (result.isConfirmed) {
                    $.ajax({
                        type:'PATCH',
                        url:'http://127.0.0.1:3002/api/admin/removeContact/',
                        data:
                        {
                          item:value
                        },
                        success:function(data){
                          console.log(data);
                         
                  
                        }
                    });
                  Swal.fire(
                      {
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                      }
                      

                  )
                  window.location.href = "../../pages/admin/ADMIN_mailBox.html";
                } 
              })






            
        });
    }
      
}









  $(function(){
  
    $.ajax({
      type:'GET',
      url:`http://127.0.0.1:3002/api/admin/getAdmin/`,
    
      success(data)
      {
        console.log(data.admin);
        messageInfo(data.admin);
      }
  
    });
  
  
  });