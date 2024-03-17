const gato = Object.freeze({
    nome: 'frajola',
    peso: 7.33,
    cor: 'Branco e Preto',
    personality: Object.freeze({
        humor: 'chato',
        social: false
    })
})

// Imutabilidade de um objeto
// Passagem por referencia ...
function changeCat(cat) {
    const newCat = { ...cat };
    newCat.nome = 'Thor',
    newCat.cor = 'Branco';
    newCat.personality.humor = 'Legal'
    newCat.personality.social = true
    return newCat;
}

const newCat = changeCat(gato);
console.log(newCat);
console.log(gato);

// Atribuicao por valor ...
let a = 3;
let b = a;

console.log(++a);
console.log(b);