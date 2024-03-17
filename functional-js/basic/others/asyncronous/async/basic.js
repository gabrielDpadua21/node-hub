const prom = (num) => {
    return new Promise((resolve, reject) => {
        if(num === 0) {
            resolve('zero')
        } else {
            reject('not zero')
        }
    })
}

prom(0)
    .then((resolved) => {
        console.log(resolved)
    })
    .catch((error) => {
        console.log(error)
    })

const asc = async (num) => {
    if(num === 0) {
        return 'zero'
    } else {
        return 'not zero'
    }
}

asc(1)
    .then((resolved) => {
        console.log(resolved)
    })
    .catch((error) => {
        console.log(error)
    })