var flag = true;
var startedTimer;

function StartTimer() {
  var secondsT = document.getElementById("seconds");
  var hoursT = document.getElementById("hours");
  var minutesT = document.getElementById("minutes");
  var s = parseInt(secondsT.value);
  var m = parseInt(minutesT.value);
  var h = parseInt(hoursT.value);
  s++;
  if (s > 59) {
    s = 0;
    m++;
    if (m > 59) {
      s = 0;
      m = 0;
      h++;
    }
  }
  if (flag == false) {
    clearInterval(startedTimer);
    startedTimer = false;
    flag = true;
    return;
  }
  document.getElementById("start").setAttribute("disabled", "disabled");

  secondsT.value = s;
  minutesT.value = m;
  hoursT.value = h;
}

function reset() {
  var secondsT = document.getElementById("seconds");
  var hoursT = document.getElementById("hours");
  var minutesT = document.getElementById("minutes");
  secondsT.value = 0;
  minutesT.value = 0;
  hoursT.value = 0;
  if (startedTimer != false) {
    flag = false;
    document.getElementById("start").removeAttribute("disabled");
  }
}

function pause() {
  if (startedTimer != false) {
    flag = false;
    document.getElementById("start").removeAttribute("disabled");
  }
}
