const javascript = {
    name: "Javascript",
    year: 1995,
    paradigm: "OO and Functional"
};

Object.seal(javascript);
console.log(Object.isSealed(javascript));

console.log(javascript);
javascript.name = "ECMAscript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);