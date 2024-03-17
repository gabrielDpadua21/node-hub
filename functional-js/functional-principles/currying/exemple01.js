// Exemplo 01 ...

function soma(value1) {
    return function(value2) {
        return function(value3) {
            return value1 + value2 + value3;
        }
    }
}

console.log(soma(10)(20)(30))