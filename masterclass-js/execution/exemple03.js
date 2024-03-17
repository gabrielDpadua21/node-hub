const object1 = {
    property: 10,
    getProterty: function() {
        const function1 = () => {
            return this.property;
        }
        return function1();
    }
}

console.log(object1.getProterty());