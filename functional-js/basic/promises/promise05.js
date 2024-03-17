function treatError(value, error) {
    return new Promise(function(resolve, reject) {
        if(Math.random() < error) {
            reject('Unexpected error')
        }

        resolve(value);
    });
}

function errorCatcher(value) {
    return new Promise(function(resolve, reject) {
        try {
            consol.log('loading...');
            resolve(value);
        } catch (err) {
            reject(err);
        }
    })
}

treatError('Testing...', 0.9)
    .then(console.log)
    .catch(err => console.log(`Error: ${err}`));

errorCatcher('Testing')
    .then(console.log)
    .catch(err => console.error(`Error: ${err}`));