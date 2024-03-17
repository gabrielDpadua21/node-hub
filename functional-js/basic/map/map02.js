const names = ['ana', 'bia', 'gui', 'lia', 'rafa'];

const firstLetter = text => text[0].toUpperCase();

const letters = names.map(firstLetter);

console.log(letters);