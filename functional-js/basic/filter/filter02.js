const carrinho = [
    {name: "Pen", qtd: 0, price: 7.99},
    {name: "Notebook", qtd: 2, price: 27.99},
    {name: "Pencil", qtd: 12, price: 2.99},
    {name: "scissors", qtd: 0, price: 7.99}
]

const getNome = item => item.name;

const qtdMaiorQueZero = item => item.qtd > 0;

const items = carrinho
                .filter(qtdMaiorQueZero)
                .map(getNome);

console.log(items);