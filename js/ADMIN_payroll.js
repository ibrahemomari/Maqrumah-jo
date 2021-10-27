var send_btn,val,send_btn_spc,val2;
send_btn= document.getElementById('btn-all-pay');
send_btn.disabled=true;
send_btn.style.cursor='no-drop';
send_btn_spc= document.getElementById('btn-spc-pay');
send_btn_spc.disabled=true;
send_btn_spc.style.cursor='no-drop';


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


$(function () {
    $("#amount-all-pay").keyup(function () {
        $('#amount-all-pay').each(function(){
            val=$(this).val()

        });
        var amount=parseInt(val);

            if(amount>0 && amount<101)
            {
                send_btn.disabled=false;
                send_btn.style.cursor='pointer';
            }
            else
            {
                send_btn.disabled=true;
                send_btn.style.cursor='no-drop';
            }

    });
});

$(function () {
    $("#amount-spc-pay").keyup(function () {
        $('#amount-spc-pay').each(function(){
            val2=$(this).val()

        });

        var amount2=parseInt(val2);

            if(amount2>0 && amount2<101)
            {
                send_btn_spc.disabled=false;
                send_btn_spc.style.cursor='pointer';
            }
            else
            {
                send_btn_spc.disabled=true;
                send_btn_spc.style.cursor='no-drop';
            }

    });
});


//get date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;



function UsersInfo(data)
{

    var x=0,id;



    $('#btn-all-pay').click(function(){
        x=parseFloat($('#amount-all-pay').val());
        var Ids;
        if(x!== null || x!==0)
        {
        Swal.fire({
            title: `send (${x}JD) payroll for all student ? `,
           
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm'
          }).then((result) => {
            if (result.isConfirmed) {
                for (let index = 0; index<data.data.length ; index++) {
                  Ids=data.data[index]._id;


                    $.ajax({
                      type:'PATCH',
                      url:`http://127.0.0.1:3002/api/users/updateSettingUser/${data.data[index]._id}`,
                      data:
                      {
                        myBalance:data.data[index].myBalance + x
                      },
        
                      success(data)
                      {
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'The payroll has been sended',
                            showConfirmButton: false,
                            timer: 2000
                          });
                         
        
                      }
        
                    });
                    $.ajax({
                      type:'PATCH',
                      url:'http://127.0.0.1:3002/api/admin/sendpayroll',
                      data:
                      {
                          payrollAmount:x,
                          date:today,
                          id:id,
                          IDs:Ids,
                          type:'payroll'
                      },
                      success:function(data)
                      {
                          console.log(data);
                      }
              
                  });
                   setTimeout(() => {
                            location.reload();
                          }, 2000);
                 
        
                }
                $.ajax({
                  type:'PATCH',
                  url:'http://127.0.0.1:3002/api/admin/payroll',
                  data:
                  {
                      payrollAmount:x,
                      date:today,
                      type:'for all student',
                      
                  },
                  success:function(data)
                  {
                      console.log(data);
                  }
          
              });
              
            }
          });
        }
        



       

    });


    $('#btn-spc-pay').click(function(){
        a=parseFloat($('#amount-spc-pay').val());
        id=parseInt($('#stu-id').val());
        var Ids;


        Swal.fire({
            title: `send (${a}JD) payroll for (${id}) ? `,
           
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm'
          }).then((result) => {
            if (result.isConfirmed) {
              var x=false;
                for (let index = 0; index<data.data.length ; index++) {
                  
                  if(data.data[index].ID === id)
                  {
                    console.log(data.data[index],index);
                    Ids=data.data[index]._id;
                    x=true;
                    $.ajax({
                              type:'PATCH',
                              url:`http://127.0.0.1:3002/api/users/updateSettingUser/${data.data[index]._id}`,
                              data:
                              {
                                myBalance:data.data[index].myBalance + a
                              },
                
                              success(data)
                              {
                                console.log(data);
                
                              }
                
                            });
                            
                    break ;
                  }
                  else
                  {
                    console.log('notfound');
                    x=false;
                  }

                  

                }


                if(x===true)
                  {
                    Swal.fire({
                      position: 'middle',
                      icon: 'success',
                      title: 'The payroll has been sended',
                      showConfirmButton: false,
                      timer: 3000
                    });
                    setTimeout(() => {
                      location.reload();
                    }, 2000);
                    $.ajax({
                      type:'PATCH',
                      url:'http://127.0.0.1:3002/api/admin/payroll',
                      data:
                      {
                          payrollAmount:a,
                          date:today,
                          type:'for specific student',
                          id:id,
                          IDs:Ids
                      },
                      success:function(data)
                      {
                          console.log(data);
                      }
              
                  });
                  $.ajax({
                    type:'PATCH',
                    url:'http://127.0.0.1:3002/api/admin/sendpayroll',
                    data:
                    {
                        payrollAmount:a,
                        date:today,
                        id:id,
                        IDs:Ids,
                        type:'payroll'
                    },
                    success:function(data)
                    {
                        console.log(data);
                    }
            
                });
                  }
                  else
                  {
                    Swal.fire({
                    position: 'middle',
                    icon: 'error',
                    title: 'Oops , This student does not exist ',
                    showConfirmButton: false,
                    timer: 9000
                  })
                  }
                
            }
          });
        



       



            


    });






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



function adminInformation (data)
{
  $('#sidebar-adminName').text(data.Firstname +' '+data.Lastname);
    $('#nav-admin-name').text('Hello , '+data.Firstname +' '+data.Lastname);
    var count=0;
    for (let index = data.payroll.length-1; index >= 0; index--)
    {
      if (data.payroll[index].id===undefined)
      {
        data.payroll[index].id='';
      }
      var add_row=`<tr>
      <th scope="row">${count+=1}</th>
      <td>${data.payroll[index].date}</td>
      <td>${data.payroll[index].type}</td>
      <td>${data.payroll[index].payrollAmount}</td>
      <td>${data.payroll[index].id}</td>
    </tr>`;
      $('#payroll-table').append(add_row);
    }
}




  $(function(){
  
    $.ajax({
      type:'GET',
      url:`http://127.0.0.1:3002/api/admin/getAdmin/`,
    
      success(data)
      {
        console.log(data);
        adminInformation(data.admin);
      }
  
    });
  
  
  });