// Created a const variable called myAge and assigned it to the value of my own age (25)
const myAge = 25;

// Created a let variable valled earlyYears and assigned the value to be 2
let earlyYears = 2;

// Using the multiplicaton assignment operator to take into account that a dog's first 2 years is equal to 10.5 human years per year
earlyYears *= 10.5;

// Created a let variable called laterYears and assigned the value to be myAge substracted from 2
let laterYears = myAge - 2;

// Using the multiplication assignment operator to take into account that a dog age with 4 years per human year (after the early years)
laterYears *= 4;

// Created a let variable called myAgeInDogYears and assigned the value to be earlyYears plus laterYears
let myAgeInDogYears = earlyYears + laterYears;

// Created a const variable called myName and assigned the value to be the String of my name (Peter)
// NOTE: The method used will return the String with all lowercase letters
const myName = 'Peter'.toLowerCase();

// Outputs my name, age and dog age to the console.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);