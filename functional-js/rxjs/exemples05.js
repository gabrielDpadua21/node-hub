const {Observable, noop} = require('rxjs');

function entry(min, max) {
    if(min > max) [min, max] = [max, min]

    return new Observable(subscriber => {
        
        Array(max - min).fill().map((_, index) => {
            subscriber.next(min + index)
        })

        subscriber.complete()
    })
}


entry(1, 10)
    .subscribe(
        value => console.log(value),
        noop
    )

