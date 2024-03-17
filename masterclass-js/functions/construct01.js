const Person = function(name, city, year) {
    this.name = name;
    this.year = year;
    this.city = city;
}

Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year;
}

const person1 = new Person("Linux Torvalds", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person2);
console.log(person1.getAge())
console.log(person2.getAge())