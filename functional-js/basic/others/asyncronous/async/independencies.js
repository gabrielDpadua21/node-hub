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
    let cat1 = prom1()
    let cat2 = prom2()
    let cat3 = prom3()

    console.log(`My cats ${await cat1}, ${await cat2} and ${await cat3}`)
}

gets()
