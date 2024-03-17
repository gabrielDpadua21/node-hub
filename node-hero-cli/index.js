const commander = require('commander');
const database  = require('./src/repositorys/database');
const Hero      = require('./src/util/utils');

async function main() {

    commander
        .version('v1')
        .option('-n, --name [value]', 'Name of the hero')
        .option('-p, --power [value]', 'Power of the hero')
        .option('-i, --id [value]', 'Hero id')

        .option('-c, --create', 'Create a hero')
        .option('-l, --list', 'List all heros')
        .option('-r --remove', 'Remove hero by id')
        .option('-u, --update [value]', 'Updated hero')
        .parse(process.argv)

    const hero = new Hero(commander);

    try{

        if(commander.create) {
            delete hero.id;

            const result = await database.insertHero(hero);

            if(!result) {
                console.error('Error to create hero');
                return;
            }

            console.log('Hero create!!!');
        }

        if(commander.list) {
            const result = await database.list();

            console.log(result);
            return;
        }

        if(commander.remove) {
            const result = await database.remove(hero.id);

            if(!result) {
                console.error('Error to remove hero');
                return;
            }

            console.log('Hero removed sucesseful!!!');
        }

        if(commander.update) {
            const id = parseInt(commander.update);

            delete hero.id;

            const data = JSON.stringify(hero);
            const heroUpdate = JSON.parse(data);

            const result = await database.update(id, heroUpdate);

            if(!result) {
                console.error('Error to update hero');
                return;
            }

            console.log('Hero updated sucesseful!!!');
        }

    } catch(err) {
        console.error('Error: ', err);
    }

}

main();