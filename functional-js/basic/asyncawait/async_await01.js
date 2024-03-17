function awaitFor(time) {
    return new Promise((resolve) =>{
        setTimeout(() => {resolve()}, time);
    })
}

function requestValue() {
    return new Promise((resolve) =>{
        resolve(1);
    })
}

async function execute() {

    let value = await requestValue();

    await awaitFor(1000);
    console.log(`Load level ${value}....`);

    await awaitFor(2000);
    console.log(`Load level ${value+1} ....`);

    await awaitFor(3000);
    console.log(`Load level ${value + 2} ....`);
}


execute();
