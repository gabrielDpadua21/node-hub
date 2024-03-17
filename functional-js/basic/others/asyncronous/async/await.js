
const catsPromise = (names) => {
    return new Promise((resolve, reject) => {
        names.forEach(element => {
            console.log(`My cats name is: ${element}`);
        });

        resolve('Thanks for waching...')
    })
}

const names = ['frajola', 'thor', 'lucifer'];

const getNames = async () => {
    let print = await catsPromise(names)

    console.log(print)
}

const getNamesError = async () => {
    let print = catsPromise(names)

    console.log(print)
}

getNamesError()