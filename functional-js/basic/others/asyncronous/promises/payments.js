const verificaValor = (valor, conta) => {
    return new Promise((resolve, reject) => {
        if(valor <= conta.saldo) {
            console.log('Saldo disponivel!');
            resolve(valor)
        } else {
            reject('Saldo insuficiente');
        }
    })
}

const sacarDinheiro = (valor, conta) => {
    return new Promise((resolve, reject) => {
        if(valor > 0) {
            console.log(`Você sacou R$ ${valor}`)
            conta.saldo - valor
            resolve(conta)
        } else {
            reject('Valor inválido')
        }
    })
}

const verificarSaldo = (myConta, conta) => {
    return new Promise((resolve, reject) => {
        if(myConta.numero == conta.numero) {
            resolve(`${conta.titular} voce possui R$ ${conta.saldo} em conta`)
        } else {
            reject('Conta inválida')
        }
    })
}

module.exports = {verificaValor, sacarDinheiro, verificarSaldo}