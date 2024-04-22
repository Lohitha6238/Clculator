let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimer();
}

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
    document.getElementById('timer').innerText = formattedTime;
}

function padNumber(number) {
    return (number < 10) ? '0' + number : number;
}