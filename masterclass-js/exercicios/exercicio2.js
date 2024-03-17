const command = 'create table author (id number, name string, age number, city string, state string, country string)';
const regex = /create table ([a-z]+) \((.+)\)/;
const parseCommand = command.match(regex);

const table = parseCommand[1] || '';
const columns = parseCommand[2].trim().split(', ') || ''

let columnsObject = {};

for (let item of columns) {
   const [key, value] = item.split(' ');
   columnsObject = {...columnsObject, [key]: value}
}

const database = {
    "tables": {
        [table]: {
            "columns": columnsObject
        },
        data: []
    }
}

console.log(JSON.stringify(database));

