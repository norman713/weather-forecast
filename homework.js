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
