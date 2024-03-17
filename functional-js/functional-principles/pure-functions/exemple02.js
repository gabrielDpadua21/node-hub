
// Funcao impura
// Sem valores deterministicos (nao consegue determinar saida apenas com os valores de entrada)
function generateRandomNumber(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

console.log(generateRandomNumber(1, 10))