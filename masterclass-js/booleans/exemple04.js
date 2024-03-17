console.log(!!-10);
console.log(!!"JavaScript");
console.log(!!{});
console.log(!![]);
console.log(!!/JavaScript/);
console.log(!!new Date());
console.log(!!function () {});

if([]) {
    console.log("Teste");
} else {
    console.log("Not a Test");
}

if({}) {
    console.log("Teste");
} else {
    console.log("Not a Test");
}