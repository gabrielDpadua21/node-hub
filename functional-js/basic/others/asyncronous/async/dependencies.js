const cat = {
    id: '123',
    name: 'frajola',
    color: 'black',
    age: '3'
}

const getName = (id) => {
    return new Promise((resolve, reject) => {
        if(id === cat.id) {
            console.log('There is my cat...')
            resolve(cat.name)
        } else {
            reject('Not found...')
        }
    })
}

const getAge = (name) => {
    return new Promise((resolve, reject) => {
        if(name === cat.name) {
            console.log('Your cat is old...')
            resolve(cat.age)
        } else {
            reject('Not found...')
        }
    })
}

// DEPENDENCIES PROMISES ...
const getCat = async () => {
    try {
        let catName = await getName('123')
        let catAge  = await getAge(catName)

        console.log(`Your cat is ${catName} and there age is ${catAge}`)
    } catch(erro) {
        console.log(erro)
    }
    
}

getCat()