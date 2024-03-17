const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    avilable: true
}

const book2 = {}

for (let key in book) {
    book2[key] = book[key];
}

console.log(book2);