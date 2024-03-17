const javascript = {
    name: "Javascript",
    year: 1995,
    paradigm: "OO and Functional"
};

Object.preventExtensions(javascript);
console.log(Object.isExtensible(javascript));

console.log(javascript);
javascript.name = "ECMAscript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);