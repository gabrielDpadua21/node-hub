function sum(a, b) {
    return new Promise((resolve) => {
        if (!a || !b) return reject('Invalid input');
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}

(async function() {
    const a = await sum(2, 2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
})();
