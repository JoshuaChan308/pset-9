let board;
let turn;
let win;
let x_wins = 0
let o_wins = 0
let determine_first_player;

const message = document.querySelector("h2");
document.getElementById("board").onclick = takeTurn;

window.onload = init()

function init() {
  board = ["", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",
           "", "", "", "", "", "", "", "",]
