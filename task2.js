let hours = 0, minutes = 0, seconds = 0;
let timer = null;

function updateDisplay() {
    let hrs = hours < 10 ? '0' + hours : hours;
    let mins = minutes < 10 ? '0' + minutes : minutes;
    let secs = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("display").innerText = hrs + ":" + mins + ":" + secs;
}

function startStopwatch() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = '';
}

function lapStopwatch() {
    if (timer) {
        let lapTime = (hours < 10 ? '0' + hours : hours) + ":" + 
                      (minutes < 10 ? '0' + minutes : minutes) + ":" + 
                      (seconds < 10 ? '0' + seconds : seconds);
        const lapDiv = document.createElement("div");
        lapDiv.innerText = "Lap: " + lapTime;
        document.getElementById("laps").appendChild(lapDiv);
    }
}