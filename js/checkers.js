let board;
let turn;
let win;
let x_wins_count = 0
let o_wins_count = 0
let switch_turn_count = 0
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
