class Produto {

    constructor(nome, preco, desc, categoria = null) {
        this._nome = nome;
        this.preco = preco;
        this.desc = desc;
        this._categoria = categoria;
    }

    get precoFinal() {
        return this.preco * (1 - this.desc);
    }

    get nome() {
        return this._nome.toUpperCase();
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(novaCategoria) {
        this._categoria = novaCategoria;
    }
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc;
    },

    set: function(novoDesconto) {
        if(novoDesconto >= 0 && novoDesconto < 1) {
            this._desc = novoDesconto;
        }
    }
});

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `Desconto de: ${this.desc*100} %`;
    }
})

const p1 = new Produto('caneta', 10, 0.3);
p1.categoria = 'Office';

console.log(p1.nome);
console.log(p1.precoFinal);
console.log(p1.categoria);
console.log(p1.descString);