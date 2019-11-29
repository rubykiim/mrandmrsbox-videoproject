let back = document.getElementById('previous');
let game = document.getElementById('game');
let fm = document.getElementById('fm');
let movie = document.getElementById('movie');
let park = document.getElementById('park');
let commlab = document.getElementById('commlab');

back.addEventListener ("click", toPrevious)
function toPrevious() {
  if (localStorage.getItem ("choice") == "movie") {
      window.location.href = "commlab-3-m.html";
  } else if (localStorage.getItem ("choice") == "park") {
    window.location.href = "commlab-3-p.html";
  } else if (localStorage.getItem ("choice") == "commlab") {
    window.location.href = "movie-3.html";
  }
}

game.addEventListener ("click", gEnd)
function gEnd() {
  window.location.href = "game-ending.html";
  localStorage.setItem("choice", "gEnd");
}

fm.addEventListener ("click", fmEnd)
function fmEnd() {
  window.location.href = "fm-ending.html";
  localStorage.setItem("choice", "fmEnd");
}

movie.addEventListener ("click", mEnd)
function mEnd() {
  window.location.href = "movie-ending.html";
  localStorage.setItem("choice", "mEnd");
}

park.addEventListener ("click", pEnd)
function pEnd() {
  window.location.href = "park-ending.html";
  localStorage.setItem("choice", "pEnd");
}

commlab.addEventListener ("click", cEnd)
function cEnd() {
  window.location.href = "commlab-ending.html";
  localStorage.setItem("choice", "cEnd");
}
