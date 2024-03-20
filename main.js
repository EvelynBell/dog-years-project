//Declares variable of the value of my age in human years
var myAge = 21;

//The first 2 years of a dog's life are equivalent to 10.5 human years each
var earlyYears = 2;
earlyYears = earlyYears * 10.5;

//This accounts for the first two years of my age
var laterYears = myAge - 2;

//Each later year of a dog's life is equivalent to 4 human years each
laterYears = laterYears * 4;

//The sum of later years and early years is my age in dog years
myAgeInDogYears = earlyYears + laterYears;

//Declares variable of my name and standardizes it in lower case
var myName = 'Eve';
myName = myName.toLowerCase();

//Writes my name, age, and age in dog years to console output
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
