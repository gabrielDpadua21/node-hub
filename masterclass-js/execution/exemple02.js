const object1 = {
    property: 10,
    getProterty: function() {
        const self = this;
        const function1 = function() {
            return self.property;
        }
        return function1();
    }
}

console.log(object1.getProterty());