function lazy(value1) {
    // Processamento ...
    const fim = Date.now() + 2500;
    while(Date.now() < fim) {}
    
    const value = Math.pow(value1, 3);
    
    return function(value2) {
        return value + value2;
    }
}

console.time('#1');
const lazy3 = lazy(3)
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd('#1');