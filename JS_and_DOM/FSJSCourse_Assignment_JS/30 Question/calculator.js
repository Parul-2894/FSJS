
// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const simple_calc = function(num1, num2, operator){

    switch(operator){

        case "+": 
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return "Wron Operation";

    }

}

const num1 = 5;
const num2 = 10;

const sum = simple_calc(num1, num2 , '+');
console.log(`${num1} + ${num2} is  ${sum}`);

const subtraction = simple_calc(num1, num2, '-');
console.log(`${num1} - ${num2} is ${subtraction}`);

const mulp = simple_calc(num1, num2, '*');
console.log(`${num1} * ${num2} is ${mulp}`);

const div = simple_calc(num1, num2, '/');
console.log(`${num1} / ${num2} is ${div}`)