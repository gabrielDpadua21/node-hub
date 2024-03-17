
function composition(...fns) {
    return function(value) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn( await acc);
            }

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
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(name.split('').join(' '));
        }, 3000);
    })
}

const wakeup = composition(upper, hello, screen);

wakeup('NEO')
    .then(console.log);
    
wakeup('FRAJOLA')
    .then(console.log)
