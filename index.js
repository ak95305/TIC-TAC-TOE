let Result = document.querySelector("#result");
let Box = document.querySelectorAll(".box");
let Reload = document.querySelector("#reload");
let Player = document.querySelector("#player");
let Game = document.querySelector("#game-container");

let status = "Player1";
let state = ["", "", "", "", "", "", "", "", ""];

Reload.addEventListener("click", reloadFunc);

function reloadFunc() {
  location.reload();
}

Player.innerHTML = ` Turn :- ${status}`;

for (let i = 0; i < Box.length; i++) {
  Box[i].addEventListener("click", myFunction);

  function myFunction() {
    if (status === "Player1" && Box[i].innerHTML === "") {
      Box[i].innerHTML = "X";
      status = "Player2";
      Player.innerHTML = ` Turn :- ${status}`;
    } else if (status === "Player2" && Box[i].innerHTML === "") {
      Box[i].innerHTML = "O";
      status = "Player1";
      Player.innerHTML = ` Turn :- ${status}`;
    }
    state.splice(i, 1, Box[i].textContent);

    if(state[0] === state[1] && state[1] === state[2]){
      if(state[0] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[0] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[3] === state[4] && state[4] === state[5]) {
      if(state[3] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[3] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[6] === state[7] && state[7] === state[8]) {
      if(state[6] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[6] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[0] === state[3] && state[3] === state[4]) {
      if(state[0] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[0] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[1] === state[4] && state[4] === state[7]) {
      if(state[1] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[1] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[2] === state[5] && state[5] === state[8]) {
      if(state[2] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[2] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[0] === state[4] && state[4] === state[8]) {
      if(state[0] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[0] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    } else if(state[2] === state[4] && state[4] === state[6]) {
      if(state[2] === "X"){
        Game.innerHTML = "Player1 WIN"
        Player.innerHTML = "";
      } else if(state[2] === "O"){
        Game.innerHTML = "Player2 WIN"
        Player.innerHTML = "";
      }
    }
  }
}


