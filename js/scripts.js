function getTimeBetweenDates() {
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);


  const oneDay = 24 * 60 * 60 * 1000;


const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));


  var monthTxt = "month";
  var dayTxt = "night";


  if (diffDays > 1) dayTxt += "s";


    document.getElementById("dateOutput").innerHTML = diffDays + " " + dayTxt;

}





$(document).ready(function(){
  $("form#hotelEpicodus").submit(function(){
    event.preventDefault();
    getTimeBetweenDates();
    var roomOption = parseInt($("#roomOption").val());
    console.log("Thanks for booking with us" + roomOption)
    pickRoom(roomOption)
    $("#resultOutput").show();
  })

});


function pickRoom(roomOption) {
    if (roomOption === 1) {
      $("#standardRoom").show();
      $("#presidentialRoom").hide();
      $("#penthouseRoom").hide();
      $("#honeymoonRoom").hide();

    } else if (roomOption === 2) {
      $("#standardRoom").hide();
      $("#presidentialRoom").show();
      $("#penthouseRoom").hide();
      $("#honeymoonRoom").hide();
    } else if (roomOption === 3) {
      $("#standardRoom").hide();
      $("#presidentialRoom").hide();
      $("#penthouseRoom").show();
      $("#honeymoonRoom").hide();

    } else {
      $("#standardRoom").hide();
      $("#presidentialRoom").hide();
      $("#penthouseRoom").hide();
      $("#honeymoonRoom").show();
    }
  }
