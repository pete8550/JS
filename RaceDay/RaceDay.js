let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 21;

if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
    console.log(`Runner with number ${raceNumber}, your race will begin at 9:30 AM`);
} else if (runnerAge > 18 && registeredEarly === false) {
    console.log(`Runner with number ${raceNumber}, your race will begin at 11:00 AM`);
} else if (runnerAge < 18) {
    console.log(`Runner with number ${raceNumber}, your race will begin at 12:30 PM`);
} else {
    console.log(`Dear runner, please approach the registration desk.`);
}