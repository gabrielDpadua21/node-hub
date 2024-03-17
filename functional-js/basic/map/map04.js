const carrinho = [
    {name: "Pen", qtd: 10, price: 7.99},
    {name: "Notebook", qtd: 2, price: 27.99},
    {name: "Pencil", qtd: 12, price: 2.99},
    {name: "scissors", qtd: 10, price: 7.99}
]

Array.prototype.myMap = function(fn) {
    
    const mapped = [];

    for (var i = 0; i < this.length; i++) {
        mapped.push(fn(this[i], i, this));
    }

    return mapped;
}

const nameItens = item => item.name;

const names = carrinho.myMap(nameItens);

console.log(names);