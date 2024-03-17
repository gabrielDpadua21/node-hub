function validateText(min, max, error, text) {
    const tam = (text || '').trim().length;

    if (tam < min || tam > max) {
        throw error;
    }


}

const produto = {nome: 'A', preco: 14.99, desc: 0.25}

validateText(4, 255, 'Nome invalido', produto.nome);