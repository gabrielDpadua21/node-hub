function function1() {
    const variable1 = 10;
    return function() {
        console.log(variable1)
    }
}

const function2 = function1();
const variable1 = 100;
function2();