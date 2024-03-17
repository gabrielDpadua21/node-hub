const listProduts = [
    {"nome": "todinho", "preco": 10},
    {"nome": "lasanha", "preco": 21.30},
    {"nome": "leite", "preco": 3.99}
]

const listPrices = listProduts.map(item => item.preco * 2);

console.log(listPrices);