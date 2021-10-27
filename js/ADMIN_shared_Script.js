

  // function to display admin  info 
  function email_noti(data)
  {
      
    
     $('#email-count').text(data.ContactUs.length);
     $('#cach-count').text(data.cashOutRequest.length);
     $('#clearance-count').text(data.clearanceRequest.length);
  
  
     for (let index = data.ContactUs.length-1; index >= data.ContactUs.length-4; index--) {
      
        var add_row=`   <a class="card" href="#">
        <div class="card-header">
          <span>${data.ContactUs[index].name}</span>
        </div>
        <div class="card-body">
          <span>${data.ContactUs[index].message}</span>
        </div>
        
        <div class="card-footer">
          ${data.ContactUs[index].date}
        </div>
      </a>`
        $('#email-notification').append(add_row);
  
    }
    $('#email-notification').append('<div class="card"><a class="btn" href="ADMIN_mailBox.html">VIEW ALL</a></div>');


    
  }
  
  $(function(){
  
    $.ajax({
      type:'GET',
      url:`http://127.0.0.1:3002/api/admin/getAdmin/`,
    
      success(data)
      {
        console.log(data);
        email_noti(data.admin);
      }
  
    });
  
  
  });

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });