const weakSet = new WeakSet();
const object1 = {};
const object2 = {};
weakSet.add(object1);
weakSet.add(object2);
console.log(weakSet.has(object1));
console.log(weakSet.has(object2));
weakSet.delete(object2);
console.log(weakSet.has(object2));
