const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
}

book.avilable = undefined;
console.log(book);
console.log("available" in book);