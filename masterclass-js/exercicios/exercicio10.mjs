import Database from "./database.mjs";

try {
	const database = new Database();
    database.execute("create table author (id number, name string, age number, city string, stage string, coutry string)");
    database.execute("insert into author (id, name, age) values (1, 'Douglas Crockford', 62)");
   	database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
   	database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
   	database.execute("delete from author where id = 1");
   	const data = database.execute("select name, age from author");
   	console.log(JSON.stringify(database, undefined, " "));
   	console.log(JSON.stringify(data, undefined, " "));
} catch(err) {
    console.log(err.message);
}