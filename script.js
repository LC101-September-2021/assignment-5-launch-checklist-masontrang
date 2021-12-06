// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// import { formSubmission } from './scriptHelper.js';

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form")
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value
        let coPilotInput = document.querySelector("input[name=coPilotName]");
        let coPilot = coPilotInput.value
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value)
        let cargoLevelInput = document.querySelector("input[name=cargoLevel]");
        let cargoLevel = Number(cargoLevelInput.value)

        formSubmission(document, list, pilot, coPilot, fuelLevel, cargoLevel)

    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
 
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log('list 1', listedPlanets);
   }).then(function () {
       console.log('list 2', listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    planet = pickPlanet(listedPlanets)
    name = planet.name 
    diameter = planet.diameter
    star = planet.star;
    distance = planet.distance;
    moons = planet.moons;
    imageUrl = planet.image;
    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
   })
   
});


// window.addEventListener("load", function(){
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
//         return response.json()
//     }).then(function(json){
//         console.log(json)
//         let astronaut = ""
//         let container = document.querySelector("#container");
//         console.log(container)
//         for(astro of json){
//             astronaut += `
//             <div class="astronaut">
//             <div class="bio">
//             <h3>${astro.firstName} ${astro.lastName}</h3>
//             <ul>
//                 <li>hours in space: ${astro.hoursInSpace}</li>
//                 <li>Active: ${astro.active}</li>
//                 <li>Skills: ${astro.skills.join(", ")}</li>         
//             </ul>
//         </div>
//         <img class="avatar" src="${astro.picture}"/>
//         </div>`
//         }
//         container.innerHTML= astronaut
//     })
// })
