// Keeps track of the order of the lights
let order = [];
// Keeps track of the order the player is pressing the lights
let playerOrder = [];
// The number of flashes that have appeared in the game
let flash;
// Keeps track of what turn we're on
let turn;
// Boolean for whether the player has hit all the right colors
let good;
// Boolean for whether it's the computer or player's turn
let compTurn;
// 
let intervalId;
// Boolean for whether the strict option has been selected; starts at false
let strict = false;
// Boolean for whether the player is using sound; starts at true
let noise = true;
// Boolean for whether the power button has been turned on; starts at false
let on = false;
// Boolean for whether the player has won the game
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener("change", event => {
    if (strictButton.checked) {
        strict = true;
    } else {
        strict = false;
    }
});

onButton.addEventListener("click", event => {
    if (onButton.checked) {
        on = true;
        turnCounter.innerHTML = "-";
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener("click", event => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
};

function gameTurn() {
    on = false;
    if (flash === turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] === 1) one();
            if (order[flash] === 2) two();
            if (order[flash] === 3) three();
            if (order[flash] === 4) four();
            flash++;
        }, 200)
    }
};

function one() {
    if (noise) {
        const audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
};

function two() {
    if (noise) {
        const audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
};

function three() {
    if (noise) {
        const audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
};

function four() {
    if (noise) {
        const audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
};

function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
}