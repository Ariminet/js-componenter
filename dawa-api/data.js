let postinput = document.getElementById("inpPostNr");
let dataList = document.getElementById("postNrForslag");

postinput.addEventListener("input", function() {
  // så kalder vi
  kaldWS(postinput.value);
});

postinput.addEventListener("select", function() {
  console.log("Der blev valgt følgende: " + postinput.value);
});

function kaldWS(opslag) {
  let wsUrl = "https://dawa.aws.dk/postnumre/autocomplete?q=" + opslag;

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

function lavDataList(postnrdata) {
  dataList.innerHTML = "";
  for (let x of postnrdata) {
    let opt = document.createElement("option");
    opt.value = x.tekst;
    dataList.appendChild(opt);
  }
}
