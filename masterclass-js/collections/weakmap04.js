const weakmap = new WeakMap();

const object1 = {}
const object2 = {}

weakmap.set(object1, "object1");
weakmap.set(object2, "object2");

console.log(weakmap.get(object1));
console.log(weakmap.get(object2));


