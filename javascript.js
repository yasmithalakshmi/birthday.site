function nextPage() {
  window.location.href = "msg.html";
}
function reveal() {
  var msg = document.getElementById("message");
  var music = document.getElementById("bgMusic");

  // Show message
  msg.classList.add("show");

  // Start music
  music.volume = 0;
  music.play();

  // Smooth volume increase (fade-in)
  var vol = 0;
  var fade = setInterval(function() {
    if (vol < 0.3) {   // keep volume low
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}