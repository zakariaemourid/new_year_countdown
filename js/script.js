const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

function showDay() {
  var now = new Date();
  var month = now.getMonth();
  var daysTillnewEve = 365 - (month * 31 + now.getDate());
  daysText.textContent = daysTillnewEve;
  minutesText.textContent = 60 - now.getMinutes();
  secondsText.textContent = 60 - now.getSeconds();
  hoursText.textContent = 23 - now.getHours();
}
setInterval(showDay, 500);
