const { deepEqual, ok } = require('assert');
const database = require('../src/repositorys/database');

const DEFAULT_ITEM_SAVE = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

const DEFAULT_ITEM_UPDATE = {
    name: 'Batman',
    power: 'Money',
    id: 2
}

describe('Hero manipulation suits', () => {

    before(async() => {
        await database.insertHero(DEFAULT_ITEM_SAVE);
        await database.insertHero(DEFAULT_ITEM_UPDATE);
    })

    it('Should search a hero using files', async() => {
        const expected = DEFAULT_ITEM_SAVE;

        const [result] = await database.list(expected.id);

        deepEqual(result, expected);
    });

    it('should save heros using files', async () => {
        const expected = DEFAULT_ITEM_SAVE;

        const resultado = await database.insertHero(DEFAULT_ITEM_SAVE);

        const [actual] = await database.list(DEFAULT_ITEM_SAVE.id);

        ok(actual, expected)
    });

    it('Should remove hero by id', async () => {
        const expected = true;
        const result = await database.remove(DEFAULT_ITEM_SAVE.id);
        deepEqual(result, expected);
    })

    it('Should update hero by id', async () => {
        const expected = {
            ...DEFAULT_ITEM_UPDATE,
            name: 'DareDevil',
            power: 'Ultra Senses'
        }

        const newData = {
            name: 'DareDevil',
            power: 'Ultra Senses'
        }

        await database.update(DEFAULT_ITEM_UPDATE.id, newData);

        const [result] = await database.list(DEFAULT_ITEM_UPDATE.id); 

        deepEqual(result, expected);

    })

})