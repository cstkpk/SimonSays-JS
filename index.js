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