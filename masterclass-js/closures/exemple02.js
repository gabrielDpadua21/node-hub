const variable1 = 10;

function function1() {
    console.log(variable1);
}

function function2(fn) {
    const variable1 = 100;
    function1();
}

function2(function1);