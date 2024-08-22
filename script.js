// Write your JavaScript code here!

//const { myFetch, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("formSubmit", function(event) {
        alert("inside submit");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let coPilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    
    if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === ""
        || cargoMassInput.value === "") {
        alert("All fields are required!");
        // stop the form submission
        event.preventDefault();
    }
    formSubmission(document,pilotNameInput.value,coPilotNameInput.value,fuelLevelInput.value,cargoMassInput.value );
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        pickPlanet(listedPlanets)// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

 });

