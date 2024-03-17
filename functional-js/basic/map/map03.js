const carrinho = [
    {name: "Pen", qtd: 10, price: 7.99},
    {name: "Notebook", qtd: 2, price: 27.99},
    {name: "Pencil", qtd: 12, price: 2.99},
    {name: "scissors", qtd: 10, price: 7.99}
]

const totalValues = item => item.qtd * item.price;

const nameItens = item => item.name;

const names = carrinho.map(nameItens);

const prices = carrinho.map(totalValues);

console.log(names);

console.log(prices);