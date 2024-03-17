const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    avilable: true
};

for (let key in book) {
    console.log(key);
    console.log(book[key]);
}