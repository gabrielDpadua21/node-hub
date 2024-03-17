const gato = {
    nome: 'frajola',
    cor: 'preta',
    idade: 4
}

const verificaGato = (gato) => {
    return new Promise((resolve, reject) => {
        if(gato.idade > 3) {
            resolve(`Hey: ${gato.nome}`)
        } else {
            reject('Not my cat')
        }
    })
}

module.exports = {verificaGato}