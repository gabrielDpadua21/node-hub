function sum(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

function sub(num1) {
    return function(num2) {
        return num1 - num2;
    }
}

function multply(num1) {
    return function(num2) {
        return num1 * num2;
    }
}


function calculate(num1) {
    return function(num2) {
        return function(fn) {
            return fn(num1)(num2)
        }
    }
}

console.log(calculate(2)(3)(sum));

console.log(calculate(10)(5)(sub));

console.log(calculate(5)(5)(multply));