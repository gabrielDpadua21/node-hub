const prom1 = () => {
    return new Promise ((resolve, reject) => {
        resolve('frajola')
    })
}

const prom2 = () => {
    return new Promise ((resolve, reject) => {
        resolve('thor')
    })
}

const prom3 = () => {
    return new Promise ((resolve, reject) => {
        resolve('lucifer')
    })
}

// INDEPENDENCIES PROMISES ...
const gets = async () => {
    let results = await Promise.all([prom1(), prom2(), prom3()])

    results.forEach((cat) => {
        console.log(cat)
    })
}

gets()
