const areas = new WeakMap();

const rectangle1 = {
	x: 10,
	y: 2
};

const rectangle2 = {
	x: 5,
	y: 2
};

function calculateArea(rectangle) {
	if(areas.has(rectangle)) return areas.get(rectangle);
	console.log('Not using cache...')
	const area = rectangle.x * rectangle.y;
	areas.set(rectangle, area);
	return area;
};

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));
