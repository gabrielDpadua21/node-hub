// Funcao contrutora ...
function Produto(name, price, desc = 0.20) {
    this.name = name;
    this.price = price;
    this.desc = desc;

    this.finalPrice = function() {
        return `Discount: ${this.price * (1 - this.desc)} $$`;
    }

    this.shelve = function() {
        return `Product: ${this.name} - ${this.price} $$`;
    }
}

const p1 = new Produto('Caneta', 8.59);
console.log(p1.shelve());
console.log(p1.finalPrice());

const p2 = new Produto('Ps4', 2000.00);
console.log(p2.shelve());
console.log(p2.finalPrice());
