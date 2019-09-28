// A constant variable named Kelvin assigned to the value of 293
const kelvin = 293;

// A constant variable named celsius assigned to the value of Kelvin(293) substracted from 273 - celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// A let variable named fahrenheit assigned with a value with the help of a mathematical equation to calculate Fahrenheit
// NOTE: With the help of the Math.floor(), the Fahrenheit temperature will round down
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// A let variable named newton assigned with a value with the help of a mathemathical equation to calculate Newton
// NOTE: With the help of the Math.floor(), the Newton temperature will round down
let newton = Math.floor(celsius * (33 / 100));

// Outputs the different temperatures to the console.
console.log(`The temperature in kelvin: ${kelvin} K.`);
console.log(`The temperature in fahrenheit: ${fahrenheit} degres F.`);
console.log(`The temperature in celcius: ${celsius} degrees C.`);
console.log(`The temperature in newton: ${newton} degrees N.`);