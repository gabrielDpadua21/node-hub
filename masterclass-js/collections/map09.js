const object = {};
object[10] = "Number";
object["10"] = "String";
object[true] = "Boolean";
object["true"] = "String";

console.log(object[10]);
console.log(object["10"]);
console.log(object[true]);
console.log(object["true"]);
console.log(object);

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));
console.log(map);
