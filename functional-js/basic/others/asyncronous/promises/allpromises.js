const cat1 = {
    name: 'Frajola',
    color: 'black'
}

const cat2 = {
    name: 'thor',
    color: 'white'
}

const cat3 = {
    name: 'lucifer',
    color: 'not have'
}

const cat4 = {
    color: 'blue'
}

const checkCat = (cat) => {
    return new Promise((resolve, reject) => {
        if(cat.name) {
            resolve(cat.name)
        } else {
            reject('Cat not have name...')
        }
    })
}

const myCat1  = checkCat(cat1)
const myCat2  = checkCat(cat2)
const myCat3  = checkCat(cat3)

const promiseArray = [myCat1, myCat2, myCat3]

const promSuccess = (array) => {
    array.forEach((item) => {
        console.log(item)
    })
}

const promError = (error) => {
    console.log(error)
}

Promise.all(promiseArray)
    .then(promSuccess)
    .catch(promError)