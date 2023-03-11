// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

const isEvenOrOdd = function(num){
    return num % 2 == 0?'even':'odd';
}
const num = 5;

console.log(`Number ${num} is;`)
console.log(isEvenOrOdd(num));