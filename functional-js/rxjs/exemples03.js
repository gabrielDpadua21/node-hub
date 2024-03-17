const { Observable } = require('rxjs');

const promise = new Promise((resolve) =>{
    resolve('Promise Return a unique value');
});

promise.then(console.log);

const obs1 = new Observable(subscriber => {
    subscriber.next('Observer return one values');
    subscriber.next('Observer return two values');
    subscriber.next('Observer return three values');
})

obs1.subscribe(console.log)