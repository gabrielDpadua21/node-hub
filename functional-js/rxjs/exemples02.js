const {from, Observable} = require('rxjs');

const msg = 'HELLO NEO';
const msg1 = 'THE MATRIX HAS YOU';
const msg2 = 'FOLLOW THE WHITE HABBIT'

const obs = new Observable(subscriber => {
    msg.split('').map(value => {
        setTimeout(() =>{
            subscriber.next(value);
        }, 500)
    })
});

obs.subscribe(value => process.stdout.write(value))

// from(msg.split('')).subscribe(value => process.stdout.write(value));

// console.log('');

// from(msg1.split('')).subscribe(value => process.stdout.write(value));

// console.log('')

// from(msg2.split('')).subscribe(value => process.stdout.write(value));

