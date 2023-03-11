// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

import countries from "../19 Question/countries.js";

const countryToCheck  = "Ethiopia";
if (!countries.includes(countryToCheck)){
    countries.push(countryToCheck)
}
console.log('Countries to check');
console.log(countries);