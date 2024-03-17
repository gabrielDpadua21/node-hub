
function composition(...fns) {
    return function(value) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, value)
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

const result = composition(upper, hello)('NEO')


console.log(result)