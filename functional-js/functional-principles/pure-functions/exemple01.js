// Uma funcao pura e aquela em que o valor de retorno e determinado APENAS
// pelos seus valores de entrada e nao deve causar efeitos colaterais observaveis
// MAIOR FACILIDADE PARA TESTAR A APLICACAO

const PI = 3.14159

// IMPURA - POIS PI E UM VALOR EXTERNO !
function areaCirc(raio) {
    return Math.pow(raio, 2) * PI; // estável ...
}

// FUNCAO PURA? - SIM
function soma(a, b) {
    return a + b;
}

// Funcao pura
function areaCircPura(raio, pi) {
    return Math.pow(raio, 2) * pi;
}

console.log(areaCirc(10));
console.log(soma(10, 20));
console.log(areaCircPura(20, Math.PI));
