// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
            let randomNumer= Math.floor(Math.random() * 5);
            const astronauts = document.getElementById("missionTarget");
                astronauts.innerHTML+=`
                <h3> Mission Destination</h3>
                        <ol>
                            <li>Name: ${json[randomNumer].name}</li>
                            <li>Diameter: ${json[randomNumer].diameter}</li>
                            <li>Star: ${json[randomNumer].star}</li>
                            <li>Distance from Earth: ${json[4].distance}</li>
                            <li>Moons: ${json[randomNumer].moons}</li>
                        </ol>
                        <img class="avatar" src="${json[randomNumer].image}">
                
                `;
            
        });
    });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let letters = /^[A-Za-z]+$/;
      if (pilotName.value === "" || copilotName.value === ""||fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      else if(!(pilotName.value.match(letters))){
         alert( "Please enter valid pilot name!" );
         event.preventDefault();
      }
      else if(!(copilotName.value.match(letters))){
         alert( "Please enter valid co pilot name!" );
         event.preventDefault();
      }
      else if(isNaN(Number( fuelLevel.value))){
         alert( "Please enter valid fuel level!" );
         event.preventDefault();
      }
      else if(isNaN(Number( cargoMass.value))){
         alert( "Please enter valid cargoMass!" );
         event.preventDefault();
      }
      else if(Number( fuelLevel.value)<10000){
         let response = document.getElementById("faultyItems");
         let pilotStatus=document.getElementById("pilotStatus");
         pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch `;
         let copilotStatus=document.getElementById("copilotStatus");
         copilotStatus.innerHTML=`Pilot ${copilotName.value} is ready for launch `;
            response.style.visibility="visible";
            let fuelStatus=document.getElementById("fuelStatus");
            fuelStatus.innerHTML=`Fuel level is too low for launch `;
            let launchStatus=document.getElementById("launchStatus");
            launchStatus.style.color="red";
            launchStatus.innerHTML=`Shuttle is not ready for launch`;
            event.preventDefault();
      }
      else if(Number( cargoMass.value)>10000){
         let response = document.getElementById("faultyItems");
         let pilotStatus=document.getElementById("pilotStatus");
         pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch `;
         let copilotStatus=document.getElementById("copilotStatus");
         copilotStatus.innerHTML=`Pilot ${copilotName.value} is ready for launch `;
            response.style.visibility="visible";
            let cargoStatus=document.getElementById("cargoStatus");
            cargoStatus.innerHTML=`Cargo mass is too high for launch `;
            let launchStatus=document.getElementById("launchStatus");
            launchStatus.style.color="red";
            launchStatus.innerHTML=`Shuttle is not ready for launch`;
            event.preventDefault();
      }
      else{
         let launchStatus=document.getElementById("launchStatus");
         launchStatus.style.color="green";
         launchStatus.innerHTML=`Shuttle is ready for launch`;
         
         event.preventDefault();
      }
      
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
