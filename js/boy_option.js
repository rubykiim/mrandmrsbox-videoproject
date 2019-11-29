let game = document.getElementsByClassName('fold_game');
let fm = document.getElementsByClassName('fold_fm');
let back = document.getElementById('previous');

game[0].addEventListener ("click", toGame);
function toGame() {
  window.location.href = "game-firstchoice.html";
  localStorage.setItem("choice", "game");
  console.log("game");
}

fm[0].addEventListener ("click", toFm);
function toFm() {
  window.location.href = "fm-firstchoice.html";
  localStorage.setItem("choice", "fm");
  console.log("fm");
}

back.addEventListener ("click", toPrevious)
function toPrevious() {
  window.location.href = "transition_boy.html";
}
