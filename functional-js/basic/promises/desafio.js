const fs = require('fs');
const path = require('path');

const mypath = path.join(__dirname, '../callbacks/data', 'dados.txt');

function callFile(path) {
    return new Promise(resolve => {
        fs.readFile(path, function(_, content) {
            resolve(content.toString());
        })
    })
}

function treatFile(path) {
    return new Promise(resolve => {
        fs.readFile(path, function(_, content) {
            content = content.toString().split('\n').map((item) => item.replace('linha', ''));
            resolve(content.toString());
        })
    })
}

callFile(mypath)
    .then(console.log)
    
treatFile(mypath)
    .then(console.log)