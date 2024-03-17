//console.log(PI)
var PI = 3.141592;
console.log(PI);
PI = 3; // REATRIBUIÇÃO COM var
console.log(3);
var PI = 3.14; // REDECLARAÇÃO COM var
console.log(PI);

// var não respeite o escopo no qual foi declarada

if(true) {
    var raio = 2;
}

console.log(raio);