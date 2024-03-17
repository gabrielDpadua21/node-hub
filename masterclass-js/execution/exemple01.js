const variable1 = 10;

const function1 = function() {
    const variable1 = 100;
    const function2 = function() {
        const variable1 = 1000;
        const variable2 = 10000;
        console.log(variable1);
    }
    console.log(variable1);
    function2();
}

function1();
//console.log(variable2);