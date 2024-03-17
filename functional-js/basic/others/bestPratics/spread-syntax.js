// Objects ...

const pikachu = {name: 'Pikachu'};
const stats = {hp: 40, attack: 60};

const lv10 = { ...pikachu, ...stats };
const lv11 = { ...pikachu, hp: 45};

console.log(lv10);
console.log(lv11);

let pokemon = ['arkbok', 'raichu', 'pichu'];

pokemon = [ ...pokemon, 'bulbasour', 'metapod', 'maiu'];

console.log(pokemon);