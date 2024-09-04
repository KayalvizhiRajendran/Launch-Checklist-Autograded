// Write your JavaScript code here!

//const { myFetch, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let coPilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    formSubmission(
      document,
      document.getElementById("faultyItems"),
      pilotNameInput.value,
      coPilotNameInput.value,
      fuelLevelInput.value,
      cargoMassInput.value
    );
    event.preventDefault();
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let selectedPlanet = pickPlanet(listedPlanets); // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });
});
