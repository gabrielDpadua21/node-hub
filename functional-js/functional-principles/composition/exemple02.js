
function composition(...fns) {
    return function(value) {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, value);
    }
}

function upper(name) {
    return name.toUpperCase();
}

function hello(name) {
    return `Hello ${name}`;
}

function screen(name) {
    return name.split('').join(' ');
}

const wakeup = composition(upper, hello, screen);

const result1 = wakeup('NEO');
const result2 = wakeup('FRAJOLA');


console.log(result1);
console.log(result2);