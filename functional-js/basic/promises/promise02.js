function loadingGame(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('loading....');
            resolve('Start game');
        }, time)
    })
}

loadingGame(4000)
    .then(loadingGame)
    .then(loadingGame(3000))
    .then(console.log)

