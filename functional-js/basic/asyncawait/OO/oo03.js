class Product {
    
    contructor(name, price, category, descount) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.descount = descount;
    }

    get finalPrice() {
        return this.price * (1 - descount);
    }

}


class Cart {

    constructor(products = []) {
        this._products = products;
    }

    get products() {
        return this._products;
    }

    set products(newProduct) {
        this._products.push(newProduct);
    }

}

const p1 = new Product('Ps2', 400, 'Console', 0.2);
const p2 = new Product('Ps3', 1500, 'Console', 0.3);
const p3 = new Product('Ps4', 2500, 'Console', 0.4);

const c1 = new Cart();

c1.products = p1;
c1.products = p2;
c1.products = p3;

console.log(c1.products);