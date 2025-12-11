let current = "red";
let intervalId = null;

const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const statusText = document.getElementById("statusText");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const nextBtn = document.getElementById("nextBtn");

function updateLights() {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");

  if (current === "red") {
    redLight.classList.add("active");
    statusText.textContent = "Current state: RED";
  } else if (current === "green") {
    greenLight.classList.add("active");
    statusText.textContent = "Current state: GREEN";
  } else if (current === "yellow") {
    yellowLight.classList.add("active");
    statusText.textContent = "Current state: YELLOW";
  }
}

function nextState() {
  if (current === "red") current = "green";
  else if (current === "green") current = "yellow";
  else current = "red";

  updateLights();
}

startBtn.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(nextState, 2000); // 2 seconds per state
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

nextBtn.addEventListener("click", () => {
  nextState();
});

// initial display
updateLights();