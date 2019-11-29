let movie = document.getElementsByClassName('fold_movie');
let park = document.getElementsByClassName('fold_park');
let commlab = document.getElementsByClassName('fold_commlab');
let back = document.getElementById('button');

movie[0].addEventListener ("click", toMovie);
function toMovie() {
  window.location.href = "movie-1.html";
  localStorage.setItem ("choice", "movie");
}

park[0].addEventListener ("click", toPark);
function toPark() {
  window.location.href = "park-1.html";
  localStorage.setItem ("choice", "park");
}

commlab[0].addEventListener ("click", toCommlab);
function toCommlab() {
  window.location.href = "commlab-1.html";
  localStorage.setItem ("choice", "commlab");
}

back.addEventListener ("click", toPrevious)
function toPrevious() {
  if (localStorage.getItem("choice") == "game") {
    window.location.href = "transition_girl_game.html";
  } else if (localStorage.getItem("choice") == "fm") {
    window.location.href = "transition_girl_fm.html";
  }
}
