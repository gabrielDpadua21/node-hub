const sum = (number1, number2) => number1 + number2;

const subtract = (number1, number2) => number1 - number2;

const calculator = fn => (number1, number2) => fn(number1, number2);
    

console.log(calculator(sum)(10, 20));
console.log(calculator(subtract)(20, 10));
