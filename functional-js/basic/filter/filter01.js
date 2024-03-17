
const myNumers = [-1, 2, 0, -3, 10, 21, 33, 12, -33];

const bigZero = item => item > 0;

const positiveNumbers = myNumers.filter(bigZero);

console.log(positiveNumbers);