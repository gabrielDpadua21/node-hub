function sum(a, b) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    })
}

function async(fn) {
    const generator = fn();
    asyncRecursive(generator);
}

function asyncRecursive(generator, result) {
    const obj = generator.next(result);
    if (obj.done) return;
    obj.value.then(function(result) {
        asyncRecursive(generator, result);
    })
}

async(function* () {
    const a = yield sum(2, 2);
    const b = yield sum(4, 4);
    const result = yield sum(a, b);
    console.log(result);
});