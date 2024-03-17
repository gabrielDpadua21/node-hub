// FUNCTION WITH FUNCTIONS PARAMS ...

function goodMorning() {
    console.log("Good morning");
}

function execAll(fn) {
    if(typeof fn === 'function') fn()
}

execAll(goodMorning);
execAll(3);

// FUNCTION RETURN OTHER FUNCTION ...

function power(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

function raiz(number) {
    return function() {
        return Math.sqrt(number);
    }
}

const pot2 = power(2);
const pot4 = power(4);
console.log(pot2(8));
console.log(pot4(8));
console.log(power(2)(2));

console.log(raiz(81)());

