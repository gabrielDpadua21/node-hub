let array = [{nome: 'frajola'}, {nome: 'frajola'}, {nome: 'frajola'}];
console.log(array);
const set = new Set(array);
console.log(set);
array = Array.from(set);
console.log(array);
