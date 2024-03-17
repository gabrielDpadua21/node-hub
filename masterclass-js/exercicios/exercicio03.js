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
        return this.creataTable(command);
    }
}

database.execute('create table author (id number, name string, age number, city string, state string, country string)');
console.log(JSON.stringify(database, undefined, " "));