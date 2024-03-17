function randomNumbersBetween(start, end) {
    if(start > end) {
        [end, start] = [start, end];
    }

    return new Promise((resolve) => {
        const factor = end - start + 1;
        const number = parseInt(Math.random() * factor) + start;
        resolve(number);
    })
}

randomNumbersBetween(1, 10)
    .then(console.log)