const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    avilable: true
};

const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    avilable: true
};

const book3 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    avilable: false
};

const book4 = book2;
const book5 = JSON.parse(JSON.stringify(book2));

console.log(JSON.stringify(book1));
console.log(JSON.stringify(book2));

console.log(JSON.stringify(book1) === JSON.stringify(book2));
console.log(JSON.stringify(book3) === JSON.stringify(book2));

console.log(book4);
console.log(book5);
console.log(book4 === book2);
console.log(book5 === book2);