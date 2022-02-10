const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const inhoursText = document.getElementById("inHours");
const inminutesText = document.getElementById("inMinutes");
const insecondsText = document.getElementById("inSeconds");

function showDay() {
  var now = new Date();
  var month = now.getMonth();
  var daysTillnewEve = 365 - (month * 31 + now.getDate());

  var list = [
    daysTillnewEve * 24,
    daysTillnewEve * 24 * 60,
    daysTillnewEve * 24 * 60 * 60,
  ];
  for (let i = 0; i < list.length; i++) {
    if (list[i] > 1000) {
      list[i] = Math.floor(list[i] / 1000) + "K";
    }
  }
  inhoursText.textContent = list[0];
  inminutesText.textContent = list[1];
  insecondsText.textContent = list[2];
  daysText.textContent = daysTillnewEve;
  minutesText.textContent = 60 - now.getMinutes();
  secondsText.textContent = 60 - now.getSeconds();
  hoursText.textContent = 23 - now.getHours();
  inhoursText.textContent = list[0];
  inminutesText.textContent = list[1];
  insecondsText.textContent = list[2];
}
setInterval(showDay, 500);
