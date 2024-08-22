// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  const missionTarget = document.getElementById("missionTarget");
  let content = "";

  content += `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`;
  missionTarget.innerHTML = content;
}

function validateInput(testInput) {
  let result = "";
  if (testInput !== "") {
    if (isNaN(testInput)) {
      result = "Not a Number";
    } else {
      result = "Is a Number";
    }
  } else {
    result = "Empty";
  }
  return result;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  document.getElementById("faultyItems").style.visibility = "visible";
  // Pilot name Check
  if (validateInput(pilot) !== "Empty") {
    document.getElementById("pilotStatus").innerHTML =
      "Pilot " + pilot + " is ready for launch";
  }
  // Co-Pilot name Check
  if (validateInput(copilot) !== "Empty") {
    document.getElementById("copilotStatus").innerHTML =
      "Co-pilot " + copilot + " is ready for launch";
  }
  // Fuel Level Check
  if (validateInput(fuelLevel) === "Is a Number") {
    if (fuelLevel < 10000) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level too low for launch";
    } else {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle is Ready for Launch";
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("fuelStatus").innerHTML =
        "Fuel level high enough for launch";
    }
  }

  // Cargo check
  if (validateInput(cargoLevel) === "Is a Number") {
    if (cargoLevel > 10000) {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("cargoStatus").innerHTML =
        "Cargo mass too heavy for launch";
    } else {
      document.getElementById("launchStatus").innerHTML =
        "Shuttle is Ready for Launch";
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("cargoStatus").innerHTML =
        "Cargo mass low enough for launch";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let selection = Math.floor(Math.random() * planets.length);
  addDestinationInfo(
    document,
    planets[selection].name,
    planets[selection].diameter,
    planets[selection].star,
    planets[selection].distance,
    planets[selection].moons,
    planets[selection].imageUrl
  );
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
