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
    insert(command){
	    const regExp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
	    const parseCommand = command.match(regExp);
	    const tableName = parseCommand[1];
	    const keys = parseCommand[2].trim().split(', ');
	    const values = parseCommand[3].trim().split(', ');
	    let object = {}
	    keys.map((item, index) => {
		object = {...object, [item]: values[index]}
	    });
	    this.tables[tableName].data.push(object);
    },
    execute(command) {
        if(command.startsWith("create table")) return this.createTable(command);
	if(command.startsWith("insert into")) return this.insert(command);
        const message = `Syntax error: ${command}`;
        throw new DatabaseError(command, message);
    } 
}


try {
    database.execute("create table author (id number, name string, age number, city string, stage string, coutry string)");
    console.log(JSON.stringify(database, undefined, " "));
    database.execute("insert into author (id, name, age) values (1, 'Douglas Crockford', 62)");
   database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
   database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
   console.log(JSON.stringify(database, undefined, " "));
} catch(err) {
    console.log(err.message);
}
