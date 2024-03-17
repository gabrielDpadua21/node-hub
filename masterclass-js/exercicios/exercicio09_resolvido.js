class DatabaseError { 
	construnctor(command, message) {
		this.command = command;
		this.message = message;
	}
}

class Parser {
	constructor() {
		this.commands = new Map();
		this.commands.set('createTable', /create table ([a-z]+) \((.+)\)/);
		this.commands.set('insert', /insert into ([a-z]+) \((.+)\) values \((.+)\)/);
		this.commands.set('select', /select (.+) from ([a-z]+)(?: where (.+))?/);
		this.commands.set('delete', /delete from ([a-z]+)(?: where (.+))?/);
	}

	parse(statement) {
		for( let [commandName, regExp] of this.commands ) {
			const parsedCommand = statement.match(regExp);
			if(parsedCommand) return {commandName, parsedCommand};
		}
	}
}

class Database {
	constructor() {
		this.tables = {}
		this.parser = new Parser()
	}
    createTable(parseCommand) {
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
    }
    insert(parseCommand){
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
    }
    select(parseCommand) {
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
    }
    delete(parseCommand) {;
        const [, tableName, where] = parseCommand;
        let rows = [];
        if(where) {
        const [whereKey, whereValue] = where.split(" = ");
        rows = this.tables[tableName].data.filter(item => {
            return item[whereKey] !== whereValue;
        });
        }
        this.tables[tableName].data = rows;
    }
    execute(command) {
        const {commandName, parsedCommand} = this.parser.parse(command);
        if ( commandName ) return this[commandName](parsedCommand);
        const message = `Syntax error: ${command}`;
        throw new DatabaseError(command, message);
    } 
}


try {
	const database = new Database();
    database.execute("create table author (id number, name string, age number, city string, stage string, coutry string)");
    database.execute("insert into author (id, name, age) values (1, 'Douglas Crockford', 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("delete from author where id = 1");
    const data = database.execute("select name, age from author");
    console.log(JSON.stringify(data, undefined, " "));
} catch(err) {
    console.log(err.message);
}
