const DatabaseError = function(command, message) {
    this.command = command;
    this.message = message;
}

const database = {
    tables: {},
    createTable(command) {
        const regExp = /create table ([a-z]+) \((.+)\)/;
        const parseCommand = command.match(regExp);
        let [, tableName, columns] = parseCommand;
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        columns = columns.split(',');
        for (let column of columns) {
            column = column.trim().split(' ');
            const [name, type] = column;
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(command){
	    const regExp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
	    const parseCommand = command.match(regExp);
	    let [,tableName, keys, values] = parseCommand;
	    keys = keys.split(", ");
	    values = values.split(", ");
	    let row = {};
	    keys.map((item, index) => {
		    const key = item;
		    const value = values[index];
		    row[key] = value;
	    });
	    this.tables[tableName].data.push(row);
    },
    select(command) {
	const regExp = /select (.+) from ([a-z]+)(?: where (.+))?/;
	const parseCommand = command.match(regExp);
	let [, keys, tableName, where] = parseCommand;
	keys = keys.split(", ");
	let rows = this.tables[tableName].data;
	if(where) {
		const [whereKey, whereValue] = where.split(" = ");
		rows = rows.filter(item => {
	    		return item[whereKey] === whereValue;
		});
	}
	rows = rows.map(item => {
		let object = {};
		keys.map(key => {
		    object = {...object, [key]: item[key]};
		});
		return object;
	});
	return rows;
    },
    execute(command) {
        if(command.startsWith("create table")) return this.createTable(command);
	if(command.startsWith("insert into")) return this.insert(command);
	if(command.startsWith("select")) return this.select(command);
        const message = `Syntax error: ${command}`;
        throw new DatabaseError(command, message);
    } 
}


try {
    database.execute("create table author (id number, name string, age number, city string, stage string, coutry string)");
    database.execute("insert into author (id, name, age) values (1, 'Douglas Crockford', 62)");
   database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
   database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
   const data = database.execute("select name, age from author");
   console.log(JSON.stringify(database, undefined, " "));
   console.log(JSON.stringify(data, undefined, " "));
} catch(err) {
    console.log(err.message);
}
