let records = [];
let starttime = 0;
let elapsedtime = 0;
let currenttime = 0;
let running = false;
let interval;
function reset() {
    starttime = 0;
    elapsedtime = 0;
    currenttime = 0;
    clearInterval(interval);
    running = false;
    document.getElementById("timer").textContent = "00:00:00:00"
    records = [];
    document.getElementById("recordscontainer").textContent = "";
}
function stop() {
    if (running) {
        running = false;
        elapsedtime = Date.now() - starttime;
        clearInterval(interval);
    }
}
function start() {
    if (!running) {
        running = true;
        starttime = Date.now() - elapsedtime;
        interval = setInterval(() => {
            currenttime = Date.now() - starttime;
            displaytime();
        }, 10);
    }
}
function displaytime() {
    let time = currenttime;

    let hours = Math.floor(time / (1000 * 60 * 60));
    time %= (1000 * 60 * 60);

    let minutes = Math.floor(time / (1000 * 60));
    time %= (1000 * 60);

    let seconds = Math.floor(time / 1000);
    let milliseconds = Math.floor(time % 1000 / 10);

    // Pad values for display
    let h = hours.toString().padStart(2, "00");
    let m = minutes.toString().padStart(2, "00");
    let s = seconds.toString().padStart(2, "00");
    let ms = milliseconds.toString().padStart(2, "0");

    document.getElementById("timer").textContent = `${h}:${m}:${s}:${ms}`;
}
function record() {
    let text = "<h3>Records</h3>";
    records.unshift(document.getElementById('timer').textContent)
    if (records.length > 3) {
        records.pop();
    }
    records.forEach((element) => {
        text += `<label class="rec"> ${element}</label><br>`;
    }
    );
    document.getElementById("recordscontainer").innerHTML = text;
}