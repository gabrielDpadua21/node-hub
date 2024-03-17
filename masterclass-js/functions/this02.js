const calculateArea = function() {
    return this.x * this.y;
}

const rectangule = {
    x: 10,
    y: 2,
    calculateArea
}

console.log(rectangule);
console.log(rectangule.calculateArea());