// Implementacao de functor

function secType(value) {
    return {
        value,
        invalid() {
            this.value === null || this.value === undefined;
        },
        map(fn) {
            if(this.invalid()) {
                return secType(null);
            }
            return secType(fn(this.value));
        },
        flatMap(fn) {
            this.map(fn).value;
        }
    }
}


const result1 = secType('NEO')
                    .map(name => name.toLowerCase())
                    .map(name => `Hello ${name}`)
                    .map(name => name.split('').join(' '))

const result2 = secType('NEO')
                    .map(name => name.toLowerCase())
                    .map(name => null)
                    //.map(name => name.split('').join(' '))

const result3 = secType('TRINITY')
                    .map(name => name.toLowerCase())
                    .map(name => `Hello ${name}`)
                    .flatMap(name => name.split('').join(' '))


console.log(result1.value);
console.log(result2.value);
console.log(result3);
