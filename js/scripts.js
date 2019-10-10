function getTimeBetweenDates() {
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);

  var diff;

  if (date1 < date2) {
    diff = new Date(date2 - date1);
  } else {
    diff = new Date(date1 - date2);
  }

  var years = (diff.getFullYear() - 1970);
  var months = diff.getMonth();
  var days = diff.getDate();

  var yearTxt = "year";
  var monthTxt = "month";
  var dayTxt = "day";

  if (years > 1) yearTxt += "s";
  if (months > 1) monthTxt += "s";
  if (days > 1) dayTxt += "s";

  if (years >= 0) {
    document.getElementById("dateOutput").innerHTML = years + " " + yearTxt + ", " + months + " " + monthTxt + ", " + days + " " + dayTxt;
  } else {
    document.getElementById("dateOutput").innerHTML = "Equal dates";
  }
}



// $(document).ready(function() {
//    $('input name=["standardRoomRadio"]').click(function(){
//     $("#standardRoom").show();
// });
// });

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
