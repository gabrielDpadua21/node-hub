const DatabaseError = function(command, message) {
    this.command = command;
    this.message = message;
}

const database =  {
    tables: {},
    creataTable(command) {
        const regex = /create table ([a-z]+) \((.+)\)/;
        const parseCommand = command.match(regex);
        const tableName = parseCommand[1] || '';
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        const columns = parseCommand[2].trim().split(', ') || ''
        let columnsObject = {};
        for (let item of columns) {
            const [key, value] = item.split(' ');
            columnsObject = {...columnsObject, [key]: value}
        };
        this.tables[tableName].columns = columnsObject
    },
    execute(command) {
        if (command.startsWith('create table')) return this.creataTable(command);
        throw new DatabaseError(command, `Syntax Error: ${command}`);
    }
}

try {
    database.execute('select id, name from author');
    console.log(JSON.stringify(database, undefined, " "));
} catch (err) {
    console.log(err.message);
}