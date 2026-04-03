// 1. Today's weather

let temperature = 86;
let conditions = "sunny";
let sunriseTime = "5:45 AM";
let sunsetTime = "6:10 PM";

// log individual variables
console.log(temperature);
console.log(conditions);
console.log(sunriseTime);
console.log(sunsetTime);

// Create a complete template
let weatherReport = `It's currently ${conditions} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime}.`;

console.log(weatherReport);
