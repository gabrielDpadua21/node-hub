let regExp = /^[a-z]+@gmail\.com$/;
let result = regExp.exec("johhhh@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);