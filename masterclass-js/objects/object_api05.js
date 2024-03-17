const javascript = {};

// NÃO E VISIVEL, NEM PODE SER APAGADA OU MODIFICA ...
Object.defineProperty(javascript, "name", {
    value: "JavaScript"
});

// É VISIVEL, POREM NÃO PODE SER APAGA OU MODIFICADA ...
Object.defineProperty(javascript, "year", {
    enumerable: true,
    value: 1995
})

// É VISIVEL E PODE SER MODIFACA MAIS NÃO PODE SER APAGADA ...
Object.defineProperty(javascript, "paradign", {
    enumerable: true,
    writable: true,
    value: "Functional"
})

// É VISIVEL E PODE MODIFICA OU APAGADA ...
Object.defineProperty(javascript, "creator", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: "anywhere"
})

delete javascript.name;
javascript.name = "ECMAscript";
console.log(javascript.name);
console.log(javascript);
javascript.paradign = "OO";
delete javascript.creator
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));