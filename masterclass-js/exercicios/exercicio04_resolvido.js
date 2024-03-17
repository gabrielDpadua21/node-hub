const DatabaseError = function(command, message) {
    this.command = command;
    this.message = message;
}

const database = {
    tables: {},
    createTable(command) {
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parseCommand = command.match(regExp);
        const tableName = parseCommand[1];
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        const columns = parseCommand[2].split(',');
        for (let column of columns) {
            column = column.trim().split(' ');
            const name = column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type;
        }
    },
    execute(command) {
        if(command.startsWith("create table")) return this.createTable(command);
        const message = `Syntax error: ${command}`;
        throw new DatabaseError(command, message);
    } 
}


try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("select id, name from author");
    console.log(JSON.stringify(database, undefined, " "));
} catch(err) {
    console.log(err.message);
}
