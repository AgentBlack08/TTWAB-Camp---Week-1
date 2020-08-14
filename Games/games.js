// The clicking game.
var Clicker = document.querySelector("#Clicker");
var Click = 0;
var ClickingFontSize = 20;
Clicker.addEventListener("click", Counter);
function Counter() {
  Click++;
  if (Click <= 100) {
    Clicker.innerHTML = Click + " clicks!";
  }
  else {
    Clicker.innerHTML = "[GAME ERROR]";
    Clicker.style.backgroundColor = "red";
  }
  ClickingFontSize = ClickingFontSize + 0.5;
  if (ClickingFontSize <= 70) {
    Clicker.style.fontSize = ClickingFontSize + "px";
  }
}

// The random color game.
var ColorChanger = document.querySelector("#ColorPicker");
ColorChanger.addEventListener("click", ColorChange)
function ColorChange() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  ColorChanger.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}