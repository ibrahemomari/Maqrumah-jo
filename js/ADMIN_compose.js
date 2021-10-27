CKEDITOR.replace('editor1');

document.getElementById('invalid-lable').style.visibility='hidden';
$("#to").change(function()
{
    var to , pattren;
    to=$('#to').val();
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(to))
    {
        document.getElementById('invalid-lable').style.visibility='hidden';
      return (true)
    }
    else
    {
        document.getElementById('invalid-lable').style.visibility='visible';
    }
  
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


$('#to').keyup(function()
{
    
});

$(function(){
    var to,name;

    $('#send-btn').click(function(){
        to=$('#to').val();
        name=$('#subject').val();

         //get date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + '/' + mm + '/' + yyyy

      var description = CKEDITOR.instances['message'].getData();

      var div = document.createElement("div");
      div.innerHTML = description;
      

        messageInfo=
        {
            to:to,
            name:name,
            subject:div.innerText,
            date:today
        }

        console.log(messageInfo);

        $.ajax({
            type:'PATCH',
            url:'http://127.0.0.1:3002/api/admin/sentMessages',
            data:
            {
                email:messageInfo.to,
                name:messageInfo.name,
                message:messageInfo.subject,
                date:messageInfo.date


            }
            ,

            success:function(data)
            {
                console.log(data);

            }
        });

        



    });


});

function UsersInfo (data)
{
      //get date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + '/' + mm + '/' + yyyy;

    $('#send-btn').click(function(){

        
        var to=$('#to').val();
        var name=$('#subject').val();
        var description = CKEDITOR.instances['message'].getData();
        var div = document.createElement("div");
        div.innerHTML = description;
        var ids;
        for (let index = 0; index < data.data.length; index++) {
            if(data.data[index].email===to)
            {
                ids=data.data[index]._id;
                $.ajax({
                    type:'PATCH',
                    url:'http://127.0.0.1:3002/api/admin/mailBox',
                    data:
                    {
                        from:'MAQRUMAH JO',
                        date:today,
                        title:name,
                        subject:div.innerHTML,
                        IDs:ids
                    },
                    success:function(data)
                    {
                        console.log(data);
                    }
            
                });
                break;

            }
            else
        {
            console.log("not found");
        }
    
            
        }
        

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