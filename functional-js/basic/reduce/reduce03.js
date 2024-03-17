const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
];

const getFragil = (item) => item.fragil;

const getTotais = (item) => item.qtde * item.preco;

const getMediaTotal = (acc, item, index, array) => {
    const novoValor = acc + item;

    if(index >= array.length - 1) {
        return novoValor / array.length;
    }

    return novoValor;
}

const getValues = (acc, item) => {
    const novaQte = acc.qtde + 1;
    const novoTotal = acc.total + item;
    return {
        qtde: novaQte,
        total: novoTotal,
        media: novoTotal / novaQte
    }
}

const mediaTotal = carrinho
    .filter(getFragil)
    .map(getTotais)
    .reduce(getMediaTotal, 0)

const totais = carrinho
        .filter(getFragil)
        .map(getTotais)
        .reduce(getValues, {qtde: 0, total: 0, media: 0})


console.log(mediaTotal);
console.log(totais)

