function eager(value1, value2) {

    // Processamento ...
    const fim = Date.now() + 2500;
    while(Date.now() < fim) {}

    const value = Math.pow(value1, 3);
    return value + value2;
}

console.time('#1');
console.log(eager(1, 100));
console.log(eager(2, 200));
console.log(eager(3, 300));
console.timeEnd('#1');
