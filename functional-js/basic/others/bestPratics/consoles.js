const gato1 = {nome: "frajola", cor: "preto", idade: 5};
const gato2 = {nome: "thor", cor: "branco", idade: 3};
const gato3 = {nome: "lucifer", cor: "malhado", idade: 2};

// Computed property names...
console.log({gato1, gato2, gato3});

//Style in console...
console.log("%c My cats", "color: red; font-weight: bold");

const gatos = [gato1, gato2, gato3];

// Table in console...
console.table(gatos);

// verify where line the code is run
const deleteMe = () => console.trace("bye bye database");

deleteMe();
deleteMe();