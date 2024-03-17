function* forever() {
    let value = 1;
    while(true) {
        try {
            const reset = yield value++;
            if (reset) value = 1;
        } catch (err) {
            console.log(err);
        }
    }
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.throw('error'));
console.log(foreverGenerator.next());
console.log(foreverGenerator.return('end'));
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());