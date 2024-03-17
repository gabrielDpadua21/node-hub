// Operador de criacao
const { of } = require('rxjs');
// Operador PIPE
const { last, map, first } = require('rxjs/operators');


const obs$ = of('NEO', 'TRINITY', 'MORPHEUS')
    .pipe(
        first(),
        last(),
        map(value => value.toLocaleLowerCase())
    )


obs$.subscribe(value => console.log(value));
