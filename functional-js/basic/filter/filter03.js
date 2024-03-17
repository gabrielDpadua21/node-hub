const array1 = [10, 2, 1, 0, 23, 25, 76, 534];

Array.prototype.myFilter = function(fn) {
    const filter = [];

    for (var i = 0; i < this.length; i++) {
        if(fn(this[i])) {
            filter.push(this[i]);
        }
    }

    return filter;
}

const maior10 = item => item > 10;

const items = array1.myFilter(maior10);

console.log(items);

