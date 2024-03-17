export default class Parser {
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
