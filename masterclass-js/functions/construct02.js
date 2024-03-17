const _new = function(fn, ...params) {
    const obj = {}
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj, params);
    return obj;
}

const Person = function(name, city, year) {
    this.name = name;
    this.year = year;
    this.city = city;
}

Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year;
}

const person1 = _new(Person, "Linux Torvalds", "Helsinki", 1969);
const person2 = _new(Person, "Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person2);
console.log(person1.getAge())
console.log(person2.getAge())