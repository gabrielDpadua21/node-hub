const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function generateElements(array) {
    return {
        iniciar(fn) {
            let index = 0
            const interval = setInterval(() => {
                if(index >= array.length) {
                    clearInterval(interval)
                } else {
                    fn(array[index])
                    index++;
                }

            }, 1000)

            return {
                stop() {
                    clearInterval(interval);
                }
            }
        }
    }
}

const temp1 = generateElements(numbers);

const subscriber = temp1.iniciar(num => {
    process.stdout.write(Math.pow(2, num) + " ");
})

setTimeout(() => {
    subscriber.stop()
}, 4000)

generateElements(['frajola', 'thor', 'lucifer']).iniciar(console.log)