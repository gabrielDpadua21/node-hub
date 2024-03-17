function generateNumbers(fn) {
    return {
        iniciar(fn, interval = 1000) {
            let num = 0;
            const funcInterval = setInterval(() => {
                fn(num++)
            }, interval);

            return {
                stop() {
                    clearInterval(funcInterval)
                }
            }
        }
    }
}

const temp1 = generateNumbers();
const exec1 = temp1.iniciar(number => {console.log(`#1: ${number * 2}`)});

const temp2 = generateNumbers();
const exec2 = temp2.iniciar(number => {console.log(`#2: ${number + 100}`)}, 2000);

setTimeout(() => {
    exec1.stop();
    exec2.stop();
}, 10000)