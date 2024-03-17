

let counter = 0;

// Funcao impura pois esta alterando algo externo a Funcao
// Causa um efeito colateral observavel
function somar(a, b) {
    counter++
    return a + b;
}

console.log(counter);
console.log(somar(1, 12));
console.log(counter);