const { Observable, noop } = require('rxjs');

const obs$ = new Observable(subscriber => {
    subscriber.next('HELLO NEO')
    subscriber.next('THE MATRIX HAS YOU')
    subscriber.next('FOLLOW THE WHITE HABBIT')

    if(Math.random() > 0.5) {
        subscriber.complete();
    } else {
        subscriber.error('SMITH ERROR');
    }

});

obs$.subscribe(
    value => console.log(value),
    error => console.log(error),
    () => console.log('END')
)

obs$.subscribe(
    value => console.log(value),
    noop,
    () => console.log('END')
)

obs$.subscribe({
    next(value) {
        console.log(value);
    },
    complete() {
        console.log('END');
    },
    error(error) {
        console.log(error)
    }
})

