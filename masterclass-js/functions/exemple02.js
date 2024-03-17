const sum = function(number1, number2) {
    return number1 + number2
}

const subtract = function(number1, number2) {
    return number1 - number2;
}

const firstClassFunctionCalculator = function(fn) {
    return function(number1, number2) {
        return fn(number1, number2);
    }
}

console.log(sum(1, 2));
console.log(subtract(2, 4));
console.log(firstClassFunctionCalculator(sum)(2, 2))
console.log(firstClassFunctionCalculator(subtract)(5, 2))