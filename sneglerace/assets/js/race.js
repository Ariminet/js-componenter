var snegl1 = {
  id: "a",
  navn: "snegl 1",
  foto: "assets/images/snegl1.png",
  x: -160,
  y: -40
};

var snegl2 = {
  id: "b",
  navn: "snegl 2",
  foto: "assets/images/snegl2.png",
  x: -160,
  y: -40
};
var snegl3 = {
  id: "c",
  navn: "snegl 3",
  foto: "assets/images/snegl3.png",
  x: -160,
  y: -40
};
var snegl4 = {
  id: "f",
  navn: "snegl 4",
  foto: "assets/images/snegl4.png",
  x: -160,
  y: -40
};

var sek = 0;
var minRandom = Math.floor(Math.random()) + 5;
var maxRandom = Math.floor(Math.random()) + 15;
var minSpring = Math.floor(Math.random() * 10) + minRandom;
var maxSpring = Math.floor(Math.random() * 15) + maxRandom;
var tidsiterval = 100;
var finishLine = 730;

window.onload = function() {
  var racetrack = document.getElementById("raceway");

  var s1 = document.createElement("div");
  s1.id = snegl1.id;
  s1.className = "snegle-container";
  s1.style.backgroundImage = "url('" + this.snegl1.foto + "')";
  s1.style.top = snegl1.y + "px";
  s1.style.left = snegl1.x + "px";
  racetrack.appendChild(s1);

  var s2 = document.createElement("div");
  s2.id = snegl2.id;
  s2.className = "snegle-container";
  s2.style.backgroundImage = "url('" + this.snegl2.foto + "')";
  s2.style.top = snegl2.y + "px";
  s2.style.left = snegl2.x + "px";
  racetrack.appendChild(s2);

  var s3 = document.createElement("div");
  s3.id = snegl3.id;
  s3.className = "snegle-container";
  s3.style.backgroundImage = "url('" + this.snegl3.foto + "')";
  s3.style.top = snegl3.y + "px";
  s3.style.left = snegl3.x + "px";
  racetrack.appendChild(s3);

  var s4 = document.createElement("div");
  s4.id = snegl4.id;
  s4.className = "snegle-container";
  s4.style.backgroundImage = "url('" + this.snegl4.foto + "')";
  s4.style.top = snegl4.y + "px";
  s4.style.left = snegl4.x + "px";
  racetrack.appendChild(s4);
};
function start() {
  document.getElementById("startknap").style.display = "none";
  afsted();
}
function afsted() {
  snegl1.x += spring();
  snegl2.x += spring();
  snegl3.x += spring();
  snegl4.x += spring();

  document.getElementById(snegl1.id).style.left = snegl1.x + "px";
  document.getElementById(snegl2.id).style.left = snegl2.x + "px";
  document.getElementById(snegl3.id).style.left = snegl3.x + "px";
  document.getElementById(snegl4.id).style.left = snegl4.x + "px";

  if (
    snegl1.x >= finishLine ||
    snegl2.x >= finishLine ||
    snegl3.x >= finishLine ||
    snegl4.x >= finishLine
  ) {
    if (snegl1.x > snegl2.x && snegl1.x > snegl3 && snegl1.x > snegl4) {
      setTimeout("winner('" + snegl1.navn + "');", 500);
    } else if (snegl2.x > snegl1.x && snegl2.x > snegl3 && snegl2.x > snegl4) {
      setTimeout("winner('" + snegl2.navn + "');", 500);
    } else if (snegl3.x > snegl1.x && snegl3.x > snegl2 && snegl3.x > snegl4) {
      setTimeout("winner('" + snegl3.navn + "');", 500);
    } else if (snegl4.x > snegl1.x && snegl4.x > snegl3 && snegl4.x > snegl2) {
      setTimeout("winner('" + snegl4.navn + "');", 500);
    } else {
      setTimeout("winner('');", 500);
    }
  } else {
    setTimeout("afsted();", tidsiterval);
    sek = sek + 1;
  }
}

function winner(vinderen) {
  var tid = (sek * tidsiterval) / 1000;

  if (vinderen == "") {
    alert("Ræset blev uafgjort! Det tog " + tid + " sekunder.");
  } else {
    alert("Ræset blev vundet af " + vinderen + "! Det tog" + tid + " sekunder");
  }
  window.location.reload();
}

function spring() {
  var randomStep = Math.round(Math.random() * maxSpring) + minSpring;
  return randomStep;
}
