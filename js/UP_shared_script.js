




function Notifications(data)
{

    $('#noti-count').text(data.transferMoney.length);
    $('#email-count').text(data.mailBox.length);
    $('#salary-count').text(data.payroll.length);
    $('#myRequest-badge').text(data.myRequest.length);


    for (let index = data.transferMoney.length-1; index >= 0; index--)
    {
        var addRow=`<li class="notification-box">`+`<div id="trans-noti">`+`<div class="row">`+`<p >`+`<i class="fa fa-retweet" aria-hidden="true"></i>`+`You have received a transfer transaction from(`+`<span id="trns-name">`+`${data.transferMoney[index].fname +' ' +data.transferMoney[index].lname}`+`</span>)`+`with a value of (`+` <span id="trans-amount">`+`${data.transferMoney[index].amount}`+`</span>JD)`+`<br>`+`<span id="trans-date">`+`${data.transferMoney[index].date}`+`</span>`+`</p>`+`</div>`+` </div>`+`<br><br>`+`</li>`;
        $('#noti-container').append(addRow);
    }
    for (let index = data.mailBox.length-1; index >= 0; index--)
    {
        var addRow= `<li class="mail-box">
        <div id="mailBox" class="container">
          <div class="row">
            
            <div class="col-md-12"><i class="fas fa-angle-right" aria-hidden="true" id="mailBox-icon"></i><span id="mailBox-title">${data.mailBox[index].title}</span></div>
          </div>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-11">
              <span id="mailBox-subject">${data.mailBox[index].subject}</span>
            </div>
            
          </div>
          <div class="row">
            <div class="col-md-2">
              <span id="mailBox-date">${data.mailBox[index].date}</span>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-6">
              <span id="mailBox-from">From: ${data.mailBox[index].from}</span> 
            </div>
          </div>
        </div>

      </li>`
        $('#email-container').append(addRow);
    }

    for (let index = data.payroll.length-1; index >= 0; index--)
    {
        var addRow= `<li class="salary-box">
        <div id="salary" class="container">
          <div class="row">
            
            <div class="col-md-12"><i class="fas fa-angle-right" aria-hidden="true" id="salary-icon"></i><span id="salary-title">Receive financial dues</span></div>
          </div>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-11">
              <span id="salary-subject">Dear student, an amount of (${data.payroll[index].payrollAmount} JD) has been deposited into your account balance as a salary</span>
            </div>
            
          </div>
          <div class="row">
            <div class="col-md-2">
              <span id="salary-date">${data.payroll[index].date}</span>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-6">
              <span id="salary-from"></span> 
            </div>
          </div>
        </div>

      </li>`
        $('#salary-container').append(addRow);
    }
    

}












$(function(){

    $.ajax({
      type:'GET',
      url:`http://127.0.0.1:3002/api/users/getUser/${userID}`,
    
      success(data)
      {
        console.log(data);
        Notifications(data.user)
        
      }
  
    });

  
  
  });


  $('#log-out').click(function () {

    localStorage.removeItem("userID");
  });