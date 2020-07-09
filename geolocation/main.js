function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(kaldWS, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// function showPosition(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }

function showError(error) {
  var x = document.getElementById("demo");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}

function kaldWS(position) {
  let wsUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    position.coords.latitude +
    "&lon=" +
    position.coords.longitude +
    "&units=metric&appid=508fdb9967c9b682b1fa422978727d79";

  fetch(wsUrl, {
    method: "GET"
  })
    .then(function(data) {
      return data.json();
    })
    .then(function(jsonData) {
      renderHTML(jsonData);
    })
    .catch(function(error) {
      console.log("noget gik galt: ", +error);
    });
}
// let btn = document.getElementById("bybtn");

function renderHTML(vejrData) {
  console.log(vejrData);
  if (vejrData.cod == 200) {
    document.getElementById("bynavn").innerHTML = vejrData.name;
    document.getElementById("resultat").innerHTML =
      vejrData.main.temp + " grader";
    document.getElementById("solop").innerHTML = msToTime(vejrData.sys.sunrise);
    document.getElementById("solned").innerHTML = msToTime(vejrData.sys.sunset);
    document.getElementById("vejrikon").innerHTML =
      "<img src='https://openweathermap.org/img/wn/" +
      vejrData.weather[0].icon +
      "@2x.png' alt='vejrikon' />";
  } else if (vejrData.cod == "404") {
    document.getElementById("bynavn").innerHTML = vejrData.message;
  }
}

function msToTime(millisekunder) {
  let date = new Date(millisekunder * 1000);
  let tidsPunkt = date.toLocaleTimeString(["da-dk"], {
    hour: "2-digit",
    minute: "2-digit"
  });
  return tidsPunkt;
}
