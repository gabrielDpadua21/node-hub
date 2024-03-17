const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = {
    name: "Scheme",
    year: 1975
}

Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = {
    name: "JavaScript",
    year: 1995
}


Object.setPrototypeOf(javascript, functionalLanguage);

console.log(scheme.paradigm);
console.log(javascript.paradigm);
console.log(Object.getPrototypeOf(scheme));