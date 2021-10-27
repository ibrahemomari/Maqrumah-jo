$(document).ready(function () {
    $('button').click(function () {
        $('#todo').append("<li class='list-group-item' id='item' >" + $("input[name=task]").val() + " <a href='#' class='close  ' aria-hidden='true'>x</a></li>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("li").remove();
    });
    $("body").on('click', '#todo li', function () {
        $(this).toggleClass("check");
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


    
    for (let index = 0; index <data.ToDOList.length ; index++) {
        var add_row=`<li class='list-group-item' id='item'>${data.ToDOList[index]}`+"<a href='#' class='close  ' aria-hidden='true'>x</a>" +`</li>`;
        $('#todo').append(add_row);

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


    var theNote;
    $('#add-note').prop('disabled', true);
    $('#input-task').keyup(function(){
        theNote=$('#input-task').val();

        if(theNote===null || theNote==='' || theNote===' ')
        {
            $('#add-note').prop('disabled', true);
        }
        else
        {
            $('#add-note').prop('disabled', false);
        }
        
    });
    $('#add-note').click(function(){
        theNote=$('#input-task').val();
        console.log(theNote);

        $.ajax({
            type:'PATCH',
            url:'http://127.0.0.1:3002/api/admin/toDo',
            data:
            {
                item:theNote
            },
            success:function(data)
            {
                console.log(data);
            }
    
        });
        setTimeout(() => {
            $('#input-task').val('');
        }, 100);
        

    });
    
    
