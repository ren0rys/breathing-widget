const breathingCircle = document.getElementById("breathingCircle");
const instruction = document.getElementById("instruction");
const orbit = document.getElementById("orbit");

let breathingInterval = null;
let timers = [];

function clearTimers() {
    timers.forEach((timer) => clearTimeout(timer));
    timers = [];
}

function showBreathingInstructions() {
    instruction.textContent = "Breathe in";

    const holdTimer = setTimeout(() => {
        instruction.textContent = "Hold";
    }, 7000);

    const exhaleTimer = setTimeout(() => {
        instruction.textContent = "Breathe out";
    }, 11000);

    timers.push(holdTimer, exhaleTimer);
}

function startBreathing() {
    clearInterval(breathingInterval);
    clearTimers();

    breathingCircle.classList.remove("active");
    orbit.classList.remove("active");

    void breathingCircle.offsetWidth;
    void orbit.offsetWidth;

    breathingCircle.classList.add("active");
    orbit.classList.add("active");

    showBreathingInstructions();

    breathingInterval = setInterval(() => {
        clearTimers();
        showBreathingInstructions();
    }, 19000);
}

/* Inicia automáticamente cuando carga la página */
window.addEventListener("DOMContentLoaded", startBreathing);