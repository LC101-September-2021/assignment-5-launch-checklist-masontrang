// Write your JavaScript code here!

// import { formSubmission } from './scriptHelper.js';

window.addEventListener("load", function() {

    
    
    launchForm.addEventListener("submit", function(event) {
        
        // let document = document.querySelector("testForm");
        let pilot = document.querySelector("input[name=pilotName]");
        let coPilot = document.querySelector("input[name=coPilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let  cargoLevel = document.querySelector("input[name=cargoLevel]");
        let list = "blah"
        // alert(pilot.value)
        // alert(coPilot.value)
        // alert(fuelLevel.value)
        alert(cargoLevel.value)
        event.preventDefault();
        formSubmission(document, list, pilot, coPilot, fuelLevel, cargoLevel)
        // alert(cargoLevel.value)
         

    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});



