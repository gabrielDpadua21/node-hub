const numbers = [3, 2, 1, -3, 4, 7];

const somaTotal = (acc, el) => acc + el;

const total = numbers.reduce(somaTotal);

console.log(total);