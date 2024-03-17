function randomNumbersBetween(start, end, time) {
    if(start > end) {
        [end, start] = [start, end];
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            const factor = end - start + 1;
            const number = parseInt(Math.random() * factor) + start;
            resolve(number);
        }, time);
    })
}

function random10Numbers() {
    return Promise.all([
        randomNumbersBetween(1, 10, 4000),
        randomNumbersBetween(1, 10, 1000),
        randomNumbersBetween(1, 10, 500),
        randomNumbersBetween(1, 10, 200),
        randomNumbersBetween(1, 10, 3000),
        randomNumbersBetween(1, 10, 2000),
        randomNumbersBetween(1, 10, 600),
        randomNumbersBetween(1, 10, 800),
        randomNumbersBetween(1, 10, 400),
        randomNumbersBetween(1, 10, 100)
    ]);
}

random10Numbers()
    .then(console.log);