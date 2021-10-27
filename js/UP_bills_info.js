var Amount,Total;

$( document ).ready(function() {
   Amount= parseInt(document.getElementById("amount").textContent);
   Total =Amount * 0.95;
   document.getElementById("total").innerHTML = Total;  

   
});

$('#printButton').click(function(){
    window.print();
    return false;
});