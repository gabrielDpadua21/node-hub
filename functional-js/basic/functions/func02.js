// FUNCTION DECLARATION ...

function Hello(str) {
    console.log(str);
}

Hello("Declaration");

// FUNCTION EXPRESSION ...

const Bye = function() {
    console.log("Expression");
}

Bye("Expression");


/* function declaration */
function soma() {
    console.log(10 + 20);
}

// function expression
const mult = function() {
    return 10 * 20;
}

soma();

const value = mult();

console.log(value);