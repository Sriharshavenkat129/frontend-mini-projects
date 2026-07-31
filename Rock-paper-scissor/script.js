const playermove = document.getElementById("playermove");
const computermove = document.getElementById("computermove");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
const result = document.getElementById("result");


function getRock() {
    playermove.textContent = "Rock";
    let cm = Math.floor((Math.random() * 100) % 3);
    if (cm === 0) {
        computermove.textContent = "Rock";
        result.textContent = "IT`S A TIE";
        result.style.color = "black";
    }
    else if (cm == 1) {
        computermove.textContent = "Paper";
        result.textContent = "YOU LOSE";
        computerscore.textContent = Number(computerscore.textContent) + 1;
        result.style.color = "red";
    }
    else {
        computermove.textContent = "Scissor";
        result.textContent = "YOU WIN";
        playerscore.textContent = Number(playerscore.textContent) + 1;
        result.style.color = "rgb(13, 244, 13)";
    }
}

function getPaper() {
    playermove.textContent = "Paper";
    let cm = Math.floor((Math.random() * 100) % 3);
    if (cm === 0) {
        computermove.textContent = "Rock";
        result.textContent = "YOU WIN";
        playerscore.textContent = Number(playerscore.textContent) + 1;
        result.style.color = "rgb(13, 244, 13)";
    }
    else if (cm == 1) {
        computermove.textContent = "Paper";
        result.textContent = "IT`S A TIE";
        result.style.color = "black";
    }
    else {
        computermove.textContent = "Scissor";
        result.textContent = "YOU LOSE";
        computerscore.textContent = Number(computerscore.textContent) + 1;
        result.style.color = "red";
    }
}

function getScissor() {
    playermove.textContent = "Scissor";
    let cm = Math.floor((Math.random() * 100) % 3);
    if (cm === 0) {
        computermove.textContent = "Rock";
        result.textContent = "YOU LOSE";
        computerscore.textContent = Number(computerscore.textContent) + 1;
        result.style.color = "red";
    }
    else if (cm == 1) {
        computermove.textContent = "Paper";
        result.textContent = "YOU WIN";
        result.style.color = "rgb(13, 244, 13)";
        playerscore.textContent = Number(playerscore.textContent) + 1;
    }
    else {
        computermove.textContent = "Scissor";
        result.textContent = "IT`S A TIE";
        result.style.color = "black";
    }
}