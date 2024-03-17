const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
  
const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses) {
        resolve('Sunglasses order processed.')
    } else {
        reject('That item is sold out.')
    }
}

const theExecutor = (resolve, reject) => {
    if(inventory.pants > 1000) {
        resolve('The target has been tarminated')
    } else {
        reject('Dead')
    }
}

const myFunctionPromise = (promise) => {
    return new Promise(promise)
}

const myPromise = myFunctionPromise(theExecutor)

console.log(myPromise)