// ARROWS ...

const cat = () => console.log("Miauuuuu!!!");

const hello = name => `Hello ${name}`;

console.log(hello('Frajola'));
cat();

const sum = num1 => num2 => num1 + num2;

console.log(sum(10)(2));