const javascript = {
    name: "Javascript",
    year: 1995,
    paradigm: "OO and Functional"
};

Object.freeze(javascript);
console.log(Object.isFrozen(javascript));

console.log(javascript);
javascript.name = "ECMAscript";
javascript.author = "Brendan Eich";
delete javascript.year;
console.log(javascript);