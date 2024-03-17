const usingSTO = () => {
    console.log("async promises");
}

setTimeout(() => { 
    usingSTO() 
}, 2000)

setTimeout(() => {
    usingSTO()
}, 3000);

setTimeout(usingSTO, 1000)