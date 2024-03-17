const Rectangle = function(base, hight) {
    this.base = base;
    this.hight = hight;
    this.calculateArea = function() {
        if(this.base < 1 && this.hight < 1) {
            throw "Invalid value for base or hight";
        }
        return this.base * this.hight;
    }
}

try {
    const rectangle = new Rectangle(0, 0);
    console.log(rectangle.calculateArea());
} catch (err) {
    console.log(err);
}