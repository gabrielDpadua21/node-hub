const getFirstElement = (array) => array[0];

const getFirstLetters = (array) => {
    return array.map(getFirstLetter);
}

const toLowerCaseLetters = (array) => {
    return array.map(toLower);
}

const concatLetters = (array) => {
    return array.reduce(concatLetter)
}

const concatLetter = (acc, letter) => acc + ':' + letter


const getFirstLetter = (string) => string[0];

const toUpper = (letter) => letter.toUpperCase();

const toLower = (letter) => letter.toLowerCase();

const print = (value) => console.log(value);

let myPromise = new Promise(function(resolvePromice) {
    resolvePromice(['Frajola', 'Thor', 'Lucifer']);
});

myPromise
    .then(getFirstElement)
    .then(getFirstLetter)
    .then(toUpper)
    .then(print);


myPromise
    .then(getFirstLetters)
    .then(toLowerCaseLetters)
    .then(concatLetters)
    .then(print);