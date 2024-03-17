const readLine = require('readline');

function getResponse(request) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    return new Promise((resolve) =>{
        rl.question(request, response => {
            resolve(response)
            rl.close()
        })
    })
}

function Morfheus() {
    console.log('NOE, WHERE ARE YOU?')
    console.log('I NEED YOU')
}

function Oracule(event) {
    console.log('Analysing...')
    console.log(`RESP: ${event.response}`)
    console.log(`DATA: ${event.data}`)
}

async function Trinity(humans) {
    while(true) {
        const response = await getResponse('NEO IS COMMING? (y/N/q) ')

        if(response.toLowerCase() === 'y') {
            (humans || []).forEach(obs => obs({response, data: Date.now()}))
        } else if(response.toLowerCase() === 'q') {
            break
        }
    }
}

// REGISTRADO 2 OBSERVERS ...
Trinity([Morfheus, Oracule])