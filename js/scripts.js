function getTimeBetweenDates() {
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
  var monthTxt = "month";
  var dayTxt = "night";
  if (diffDays > 1) dayTxt += "s";
    document.getElementById("dateOutput").innerHTML = diffDays + " " + dayTxt;

  var pickRoom = priceCheck();
  function priceCheck(diffDays, price){
    if (pickRoom===1) {
        return 100 * diffDays;
    } else if (pickRoom===2) {
      return 200 * diffdays;
    } else if (pickRoom===3) {
      return 300 * diffDays;
    } else if (pickRoom===4) {
      return 400 * diffDays;
    } else {
      return false;
    }
    return pickRoom
  }



$(document).ready(function(){
  $("form#hotelEpicodus").submit(function(){
    event.preventDefault();
    getTimeBetweenDates();
    var roomOption = parseInt($("#roomOption").val());
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
