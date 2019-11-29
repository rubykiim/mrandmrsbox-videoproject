let heart = document.getElementById('heart');
let audio = document.getElementById("pop");

setTimeout (function() {
  heart.style.display = "block";} ,3100);

  heart.addEventListener("click", playPop);

  function playPop() {
    // audio.currentTime = 0;
    audio.play();
    setTimeout (function() {
      window.open( "opening.html", "_self", "");
    }, audio.duration * 1000);
  }
