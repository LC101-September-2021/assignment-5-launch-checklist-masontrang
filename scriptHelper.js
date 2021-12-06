// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.style.visibility = "visible";
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
}

function validateInput(testInput){
    let numberInput = Number(testInput)
    if (testInput === ""){
        return "Empty"
    }
    else if (isNaN(numberInput)){
        return "Not a Number"
    }
    else if (isNaN(numberInput) === false){
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    


    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||validateInput(cargoLevel) === "Empty"){
        window.alert("All fields are required!")
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" ||validateInput(cargoLevel) === "Not a Number"){
        window.alert("Check for valid input in All Fields")
    } else{
        list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`
        if (fuelLevel < 10000 && cargoLevel > 10000){
            fuelStatus.innerHTML = `Not enough fuel`
            cargoStatus.innerHTML = `Too much cargo`
            launchStatus.innerHTML = `Launch not ready`
            launchStatus.style.color = "#C7254E";
        }
        else if ((fuelLevel >= 10000) && cargoLevel > 10000){
            fuelStatus.innerHTML = `Fuel Ready`
            cargoStatus.innerHTML = `Too much cargo`
            launchStatus.innerHTML = `Launch not ready`
            launchStatus.style.color = "#C7254E";
        }
        else if ( fuelLevel < 10000 && cargoLevel <= 10000){
            fuelStatus.innerHTML = `Fuel not ready`
            cargoStatus.innerHTML = `Cargo Ready`
            launchStatus.innerHTML = `Launch not ready`
            launchStatus.style.color = "#C7254E";
        }
        else{
            fuelStatus.innerHTML = `Fuel is ready`
            cargoStatus.innerHTML = `Cargo is ready`
            launchStatus.innerHTML = `Launch is ready`
            launchStatus.style.color = "green";
        }
     }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json().then( function(json) {
            console.log('test' , json)
            return json
            // planetsReturned = json
         });
      });
    return planetsReturned;
}

function pickPlanet(planetsReturned) {
    let random = Math.floor(Math.random()*6) 
    return planetsReturned[random]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
