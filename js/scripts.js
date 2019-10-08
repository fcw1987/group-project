function getTimeBetweenDates(e) {
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
    document.getElementById("resultOutput").innerHTML = years + " " + yearTxt + ", " + months + " " + monthTxt + ", " + days + " " + dayTxt;
  } else {
    document.getElementById("resultOutput").innerHTML = "Equal dates";
  }
}
