function Square(side) {
	this.side = side;
}

Square.prototype.calculateArea = function() {
	return Math.pow(this.side, 2);
}

Square.prototype.toString = function() {
	return `side: ${this.side}`;
}

Square.fromArea = function(area) {
	return new Square(Math.sqrt(area));
}

const square = Square.fromArea(16);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());
