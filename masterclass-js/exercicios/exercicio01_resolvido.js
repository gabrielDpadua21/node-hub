let command = "create table author (id number, name string, age number, city string, state string, country string)";

const regExp = /create table ([a-z]+) \((.+)\)/;
const parseCommand = command.match(regExp);
const tableName = parseCommand[1];
const columns = parseCommand[2].split(', ');

console.log(tableName);
console.log(columns);
