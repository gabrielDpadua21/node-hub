const sum = function([number1, number2]) {
    return number1 + number2;
}

const sub = function({number1, number2}) {
    return number1 - number2;
}

console.log(sum([1, 2]));

console.log(sub({number1: 10, number2: 2}));