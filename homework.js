//----- 1. Today's weather

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

//----- 2. Weather Data
var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

//2.1  Highest temperature
let highestTemp = highTemperatures[0];
for (let i = 1; i < highTemperatures.length; i++) {
  if (highTemperatures[i] > highestTemp) {
    highestTemp = highTemperatures[i];
  }
}

console.log("Highest Temperature:", highestTemp);

//2.2  Lowest temperature
let lowestTemp = lowTemperatures[0];
for (let i = 1; i < lowTemperatures.length; i++) {
  if (lowTemperatures[i] < lowestTemp) {
    lowestTemp = lowTemperatures[i];
  }
}

console.log("Lowest Temperature:", lowestTemp);

//2.3  Average temperature
let totalHighTemp = 0;
for (let i = 0; i < highTemperatures.length; i++) {
  totalHighTemp += highTemperatures[i];
}

let averageHighTemp = totalHighTemp / highTemperatures.length;
console.log("Average High Temperature:", averageHighTemp);

//2.4 Average low temperature
let totalLowTemp = 0;
for (let i = 0; i < lowTemperatures.length; i++) {
  totalLowTemp += lowTemperatures[i];
}
let averageLowTemp = totalLowTemp / lowTemperatures.length;
console.log("Average Low Temperature:", averageLowTemp);

//2.5 + 2.6 Median temperature
function findMedian(arr) {
  let sorted = [...arr].sort((a, b) => a - b);

  let n = sorted.length;
  let mid = Math.floor(n / 2);

  // check if the number of elements is even or odd
  if (n % 2 === 0) {
    // if even -> take the average of the two middle numbers
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    // if odd -> return the middle number
    return sorted[mid];
  }
}

console.log("Median High Temperature:", findMedian(highTemperatures));
console.log("Median Low Temperature:", findMedian(lowTemperatures));

//----- 3. Weather Object

let weather = {
  temperature: 86,
  conditions: "sunny",
};

console.log("Current temp:", weather.temperature);

let report = `It's ${weather.temperature} degrees F and ${weather.conditions}.`;

console.log(report);

//----- CHALLENGE 1
var todaysWeather = {
  temperature: {
    high: 55,
    low: 32,
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM",
  },
};

console.log("High:", todaysWeather.temperature.high);
console.log("Low:", todaysWeather.temperature.low);
console.log("Conditions:", todaysWeather.conditions);
console.log("Sunrise:", todaysWeather.astronomy.sunrise);

// Create a complete report using the data in the object
let report1 = `Today is ${todaysWeather.conditions}. The high is ${todaysWeather.temperature.high} F degrees and the low is ${todaysWeather.temperature.low} F degrees. The sun rose at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`;

console.log(report1);
