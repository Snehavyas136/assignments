let workTime = 25 * 60;
let shortBreakTime = 5 * 60;
let longBreakTime = 15 * 60;
let pomodorosBeforeLongBreak = 4;

let currentSession = "Work"; // Work | Short Break | Long Break
let timer;
let remainingTime = workTime;
let isRunning = false;
let completedPomodoros = 0;

const sessionTypeEl = document.getElementById("sessionType");
const timeEl = document.getElementById("time");
const trackerEl = document.getElementById("pomodoroTracker");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimeDisplay() {
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  timeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTracker() {
  let tracker = "";
  for (let i = 0; i < pomodorosBeforeLongBreak; i++) {
    tracker += i < completedPomodoros ? "🔴 " : "⚪ ";
  }
  trackerEl.textContent = tracker.trim();
}

function switchSession() {
  if (currentSession === "Work") {
    completedPomodoros++;
    if (completedPomodoros % pomodorosBeforeLongBreak === 0) {
      currentSession = "Long Break";
      remainingTime = longBreakTime;
    } else {
      currentSession = "Short Break";
      remainingTime = shortBreakTime;
    }
  } else {
    currentSession = "Work";
    remainingTime = workTime;
  }
  sessionTypeEl.textContent = currentSession;
  updateTracker();
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        updateTimeDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        switchSession();
        updateTimeDisplay();
        startTimer(); // auto-start next session
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;

  // Read updated settings
  workTime = parseInt(document.getElementById("workDuration").value) * 60;
  shortBreakTime = parseInt(document.getElementById("shortBreak").value) * 60;
  longBreakTime = parseInt(document.getElementById("longBreak").value) * 60;
  pomodorosBeforeLongBreak = parseInt(document.getElementById("pomodoroCount").value);

  remainingTime = workTime;
  currentSession = "Work";
  completedPomodoros = 0;

  sessionTypeEl.textContent = currentSession;
  updateTimeDisplay();
  updateTracker();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize
updateTimeDisplay();
updateTracker();