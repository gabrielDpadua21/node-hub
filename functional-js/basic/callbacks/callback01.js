
function exec(func, num1, num2) {
    return func(num1, num2)
}

function somarNoTerminal(num1, num2) {
    console.log(num1 + num2);
}

function subtrairNoTerminal(num1, num2) {
    console.log(num1 - num2);
}


exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const fn = () => console.log("Exec...");

setInterval(fn, 1000);