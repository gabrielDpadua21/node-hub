const {verificaValor, sacarDinheiro, verificarSaldo} = require('./payments.js');
const {conta} = require('./account.js');

let valor = 800;

verificaValor(valor, conta)
    .then((resolved) => {
        return sacarDinheiro(resolved, conta)
    })
    .then((resolved) => {
        return verificarSaldo(resolved, conta)
    })
    .then((success) => {
        console.log(success)
    })
    .catch((error) => {
        console.log(error)
    })