function randomNumbersBetween(start, end, forbidden) {
    if(start > end) [end, start] = [start, end];

    return new Promise((resolve, reject) => {
        const factor = end - start + 1;
        const number = parseInt(Math.random() * factor) + start;

        if(forbidden.includes(number)) {
            reject('Numero repetido!!!');
        }

        resolve(number);
    })
}

async function generateLottery(qtdNumbers, tries = 1) {
    try {
        const numbers = [];

        for(_ of Array(qtdNumbers).fill()) {
            numbers.push(await randomNumbersBetween(1, 60, numbers));
        }

        return numbers;

    } catch(err) {
        if(tries > 10) throw "Error: duplicate numbers";

        return generateLottery(qtdNumbers, tries + 1);
    }
}

generateLottery(20)
    .then(console.log)
    .catch(console.error)