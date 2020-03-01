

  let board;
  let turn;
  let win;
  let determine_first_player;
  let x_wins = 0;
  let o_wins = 0;
  let ties= 0


  window.onload = init;
  document.getElementById("board").onclick = takeTurn;
  document.getElementById("reset-button").onclick = init;
