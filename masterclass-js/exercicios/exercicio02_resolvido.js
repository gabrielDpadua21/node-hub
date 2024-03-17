let command = "create table author (id number, name string, age number, city string, state string, country string)";

const regExp = /create table ([a-z]+) \((.+)\)/;
const parseCommand = command.match(regExp);
const tableName = parseCommand[1];
const columns = parseCommand[2].split(',');

const database = {
    tables: {
        [tableName]: {
            columns: {},
            data: []
        }
    }
}

for (let column of columns) {
    column = column.trim().split(' ');
    const name = column[0];
    const type = column[1];
    database.tables[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, undefined, " "));