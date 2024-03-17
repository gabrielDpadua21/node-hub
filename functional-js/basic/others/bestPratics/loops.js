const orders = [500, 30, 99, 15, 223];

//Reduce...
const total = orders.reduce((total, value) => total + value);

//Maps ...
const withMax = orders.map(v => v * 1.1);


//Filter ...
const highValue = orders.filter(v => v > 100);

console.log(total);
console.log(withMax);
console.log(highValue);