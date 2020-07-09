function User(id, name, img, forward, upwards) {
  this.id = id;
  this.navn = name;
  this.foto = img;
  this.x = forward;
  this.y = upwards;
}

let userOne = new User("a", "Erik", "assets/images/snegl1.png", -160, -40);
let userTwo = new User("b", "Peter", "assets/images/snegl2.png", -160, -40);
let userThree = new User("c", "Poul", "assets/images/snegl3.png", -160, -40);
let userFour = new User("d", "Eva", "assets/images/snegl4.png", -160, -40);

let sek = 0;
let minRandom = Math.floor(Math.random()) + 5;
let maxRandom = Math.floor(Math.random()) + 15;
let minSpring = Math.floor(Math.random() * 10) + minRandom;
let maxSpring = Math.floor(Math.random() * 15) + maxRandom;
let tidsiterval = 100;
let finishLine = 730;

window.onload = function() {
  let racetrack = document.getElementById("raceway");

  let s1 = document.createElement("div");
  s1.id = userOne.id;
  s1.className = "snegle-container";
  s1.style.backgroundImage = "url('" + userOne.foto + "')";
  s1.style.top = userOne.y + "px";
  s1.style.left = userOne.x + "px";
  racetrack.appendChild(s1);

  var s2 = document.createElement("div");
  s2.id = userTwo.id;
  s2.className = "snegle-container";
  s2.style.backgroundImage = "url('" + userTwo.foto + "')";
  s2.style.top = userTwo.y + "px";
  s2.style.left = userTwo.x + "px";
  racetrack.appendChild(s2);

  var s3 = document.createElement("div");
  s3.id = userThree.id;
  s3.className = "snegle-container";
  s3.style.backgroundImage = "url('" + userThree.foto + "')";
  s3.style.top = userThree.y + "px";
  s3.style.left = userThree.x + "px";
  racetrack.appendChild(s3);

  var s4 = document.createElement("div");
  s4.id = userFour.id;
  s4.className = "snegle-container";
  s4.style.backgroundImage = "url('" + userFour.foto + "')";
  s4.style.top = userFour.y + "px";
  s4.style.left = userFour.x + "px";
  racetrack.appendChild(s4);
};
function start() {
  document.getElementById("startknap").style.display = "none";
  afsted();
}
function afsted() {
  userOne.x += spring();
  userTwo.x += spring();
  userThree.x += spring();
  userFour.x += spring();

  document.getElementById(userOne.id).style.left = userOne.x + "px";
  document.getElementById(userTwo.id).style.left = userTwo.x + "px";
  document.getElementById(userThree.id).style.left = userThree.x + "px";
  document.getElementById(userFour.id).style.left = userFour.x + "px";
  if (
    userOne.x > finishLine ||
    userTwo.x > finishLine ||
    userThree.x > finishLine ||
    userFour.x > finishLine
  ) {
    if (
      userOne.x > userTwo.x &&
      userOne.x > userThree &&
      userOne.x > userFour
    ) {
      setTimeout("winner('" + userOne.navn + "');", 500);
    } else if (
      userTwo.x > userOne.x &&
      userTwo.x > userThree &&
      userTwo.x > userFour
    ) {
      setTimeout("winner('" + userTwo.navn + "');", 500);
    } else if (
      userThree.x > userOne.x &&
      userThree.x > userTwo &&
      userThree.x > userFour
    ) {
      setTimeout("winner('" + userThree.navn + "');", 500);
    } else if (
      userFour.x > userOne.x &&
      userFour.x > userThree &&
      userFour.x > userTwo
    ) {
      setTimeout("winner('" + userFour.navn + "');", 500);
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
