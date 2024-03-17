// RECURSOS DA LINGUAGEM 
// Funcoes que operam em outras funcoes
// Tomando-as como argumentos ou retornando-as

function execute(fn, ...params) {
    return function(text) {
        return `${text} ${fn(...params)}`
    }
}

function somar(a, b, c) {
    return a + b + c;
}

function mult(a, b) {
    return a * b;
}

console.log(execute(somar, 1, 2, 3)('Soma: '));
console.log(execute(mult, 3, 4, 5)('Multiplicacao: '));