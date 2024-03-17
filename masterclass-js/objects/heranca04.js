const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;

console.log(scheme.paradigm);
console.log(scheme.paradigm);