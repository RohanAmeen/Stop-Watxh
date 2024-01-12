let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startBtn').innerText = 'Pause';
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById('startBtn').innerText = 'Resume';
  }
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
  document.getElementById('startBtn').innerText = 'Start';
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.getElementById('display');
  display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(value) {
  return value < 10 ? '0' + value : value;
}
