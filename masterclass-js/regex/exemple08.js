let regExp = /^\w+@\w+\.\w{3}$/;
let result = regExp.exec("mary@hotmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);