import Parser from './parser.mjs';
import DatabaseError from './databaseerror.mjs';

export default class Database {
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
    delete(parseCommand) {
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
		if( commandName ) return this[commandName](parsedCommand);	
		const message = `Syntax error: ${command}`;
		throw new DatabaseError(command, message);
	} 
}