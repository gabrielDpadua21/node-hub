const {verificaGato} = require('./module.js');

const gato = {
    nome: 'Thor',
    cor: 'White',
    idade: 2
}

const success = (resolve) => {
    console.log(resolve);
}

const falue = (reject) => {
    console.log(reject)
}

// REJECT PROMISES WITH CATCH
verificaGato(gato)
    .then(success)
    .catch(falue)
