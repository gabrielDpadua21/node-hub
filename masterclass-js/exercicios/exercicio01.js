let command = "create table author (id number, name string, age number, city string, state string, country string)";

let regex = /\((\w+\s\w+\,\s){5}\w+\s\w+\)$/;
let result = regex.exec(command);

let tableName = command
                    .slice(command.indexOf("table"), command.indexOf("("))
                    .split(' ')[1];

console.log(tableName);


let columns = result[0]
                .replace(/\(/g, '')
                .replace(/\(/g, '')
                .split(',');


console.log(columns);