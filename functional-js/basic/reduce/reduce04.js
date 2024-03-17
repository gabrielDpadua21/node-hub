const array1 = [10, 2, 1, 0, 23, 25, 76, 534];

Array.prototype.myReduce = function(fn, inicial) {

    var total = inicial || this[0];

    for(var i = 0; i < this.length; i++) {

        if(inicial && i === 0) {
            continue
        }

        total = fn(total, this[i]);
    }

    return total;

}

const sumTotal = (acc, value) => {
    return acc - value;
}


const total = array1.myReduce(sumTotal, 1);

console.log(total);