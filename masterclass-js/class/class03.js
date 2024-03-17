class Square {
	constructor(side) {
		this.side = side;
	}

	calculateArea() {
		return Math.pow(this.side, 2);
	}

	toString() {
		return `side: ${this.side}`;
	}
}

const square = new Square(4);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());
