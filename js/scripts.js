function getTimeBetweenDates() {
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);

  // var diff;
  //
  // if (date1 < date2) {
  //   diff = new Date(date2 - date1);
  // } else {
  //   diff = new Date(date1 - date2);
  // }
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds


const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));

  // var years = (diff.getFullYear() - 1970);
  // var months = diff.getMonth();
  // var days = diff.getDate();

  // var yearTxt = "year";
  var monthTxt = "month";
  var dayTxt = "night";

  // if (years > 1) yearTxt += "s";
  // if (months > 1) monthTxt += "s";
  if (diffDays > 1) dayTxt += "s";

  // if (years >= 0) {
    document.getElementById("dateOutput").innerHTML = diffDays + " " + dayTxt;
  // } else {
  //   document.getElementById("dateOutput").innerHTML = "Equal dates";
  // }
  // var pickRoom = priceCheck();
  // function priceCheck(diffDays, price){
  //   if (pickRoom===1) {
  //       return 100 * diffDays;
  //   } else if (pickRoom===2) {
  //     return 200 * diffdays;
  //   } else if (pickRoom===3) {
  //     return 300 * diffDays;
  //   } else if (pickRoom===4) {
  //     return 400 * diffDays;
  //
  //   } else {
  //     return false;
  //   }
  //
  // }

// console.log(diffDays)

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

  }
