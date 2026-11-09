let sec = 0;
let min = 0;
let hr = 0;
let timer = null;

function runTime() {
  let s = sec;
  let m = min;
  let h = hr;

  if (s < 10) s = "0" + s;
  if (m < 10) m = "0" + m;
  if (h < 10) h = "0" + h;

document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
}

function update() {
  sec = sec + 1;

  if (sec == 60) {
    sec = 0;
    min = min + 1;
  }
  if (min == 60) {
    min = 0;
    hr = hr + 1;
  }
  runTime();
}

function start() {
  if (timer == null) {
    timer = setInterval(update, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  sec = 0;
  min = 0;
  hr = 0;
  runTime();
}
