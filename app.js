let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
console.log("Runner registered early:", registeredEarly);

var runnerAge = 16;
var registeredEarly = true;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(
    "Runner is an adult and registered early. Race number:",
    raceNumber
  );
} else {
  console.log(
    "Runner is either not an adult or did not register early. Race number:",
    raceNumber
  );
}

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(
    "Runner is an adult and registered early. Race number:",
    raceNumber
  );

  if (runnerAge > 18 && registeredEarly) {
    console.log(`Your race time is 9:30 am. Race number: ${raceNumber}`);
  } else {
    console.log(`Your race time is 11:00 am. Race number: ${raceNumber}`);
  }
} else {
  console.log(
    "Runner is either not an adult or did not register early. Race number:",
    raceNumber
  );
}
