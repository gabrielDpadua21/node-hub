const hello = 'hello'.split('');
const neo = 'neo'.split('');
const trinity = 'trinity'.split('');

const hellon = [hello, neo]
const hellot = [hello, trinity];

const letters = [hellon, hellot];

// const result = letters
//                 .map(letter => letter.toLowerCase())
//                 .reduce((word, letter) => word + letter);

// INVERT WORDS
// const result = letters
//                 .map(letter => letter.toLowerCase())
//                 .reduce((word, letter) => letter + word);


// console.log(letters);
// console.log(letters.flat(Infinity));

const words = letters.flat(Infinity);

const result = words
                .flatMap(letter => [letter, ' '])
                .map(letter => letter.toUpperCase())
                .reduce((word, letter) => word + letter)
                //.reduce((word, letter) => letter+word);

console.log(result);




