const timerDisplay = document.getElementById('timer');
const sessionTypeDisplay = document.getElementById('session-type');
const cycleIndicator = document.getElementById('cycle-indicator');

let workDuration = 25 * 60;
let shortBreakDuration = 5 * 60;
let longBreakDuration = 15 * 60;
let pomodorosBeforeLongBreak = 4;

let timer;
let remainingTime = workDuration;
let isRunning = false;
let currentPomodoro = 0;
let cycleCount = 0;
let currentMode = 'Work';

function updateDurations() {
  workDuration = parseInt(document.getElementById('work-duration').value) * 60;
  shortBreakDuration = parseInt(document.getElementById('short-break').value) * 60;
  longBreakDuration = parseInt(document.getElementById('long-break').value) * 60;
  pomodorosBeforeLongBreak = parseInt(document.getElementById('pomodoros-before-break').value);
  if (currentMode === 'Work') remainingTime = workDuration;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
  sessionTypeDisplay.textContent = currentMode;
  updateCycleIndicator();
}

function updateCycleIndicator() {
  let indicators = '';
  for (let i = 0; i < pomodorosBeforeLongBreak; i++) {
    indicators += i < currentPomodoro ? '🔴 ' : '⚪ ';
  }
  cycleIndicator.textContent = indicators.trim();
}

function switchMode() {
  if (currentMode === 'Work') {
    currentPomodoro++;
    if (currentPomodoro === pomodorosBeforeLongBreak) {
      currentMode = 'Long Break';
      remainingTime = longBreakDuration;
      currentPomodoro = 0;
    } else {
      currentMode = 'Short Break';
      remainingTime = shortBreakDuration;
    }
  } else {
    currentMode = 'Work';
    remainingTime = workDuration;
  }
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    remainingTime--;
    updateDisplay();

    if (remainingTime <= 0) {
      clearInterval(timer);
      isRunning = false;
      switchMode();
      updateDisplay();
      startTimer(); // auto-start next session
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  updateDurations();
  currentPomodoro = 0;
  currentMode = 'Work';
  remainingTime = workDuration;
  updateDisplay();
}

document.getElementById('start').addEventListener('click', () => {
  updateDurations();
  startTimer();
});
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

window.onload = updateDisplay;
