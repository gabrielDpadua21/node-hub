const msg = 'HELLO NEO';
const msg1 = 'THE MATRIX HAS YOU';
const msg2 = 'FOLLOW THE WHITE HABBIT'

function habbit(array) {
    return {
        iniciar(fn) {
            let index = 0;

            const interval = setInterval(() => {

                if(index >= array.length) {
                    clearInterval(interval);
                    console.log('')
                } else {
                    fn(array[index]);
                    index++
                }
            }, 1000)
        }
    }
}


const printLine = (letter) => {
    process.stdout.write(letter);
}

const exec = habbit(msg.split(''));
exec.iniciar(printLine)

setTimeout(() =>{
    const exec1 = habbit(msg1.split(''));
    exec1.iniciar(printLine)
}, (msg.length * 1000 + 1000))

setTimeout(() =>{
    setTimeout(() =>{
        const exec2 = habbit(msg2.split(''));
        exec2.iniciar(printLine)
    }, (msg1.length * 1000 + 1000))
}, ((msg.length * 1000 + 1000)))