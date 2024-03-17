const {readFile, writeFile} = require('fs');
const {promisify} = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {

    constructor() {
        this.FILE_NAME = './src/files/heros.json';
    }

    async getDataFiles() {
        const file = await readFileAsync(this.FILE_NAME);
        return JSON.parse(file.toString());
    }

    async writeFiles(datas) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(datas));
        return true;
    }

    async insertHero(hero) {
        const data = await this.getDataFiles();
        const id = hero.id <= 2 ? hero.id : Date.now();

        const heroWithId = {id, ...hero};
        const finalData = [...data, heroWithId];

        const result = await this.writeFiles(finalData);

        return result;
    }

    async list(id) {
        const data = await this.getDataFiles();
        const filterData = data.filter(items => id ? items.id === id : true);
        return filterData;
    }

    async remove(id) {

        if(!id) {
            await this.writeFiles([]);
            return true;
        }

        const data = await this.getDataFiles();

        const index = data.findIndex(item => item.id === parseInt(id));

        if(index === -1) {
            throw Error('Data not found');
        }

        data.splice(index, 1);

        return await this.writeFiles(data);
    }

    async update(id, content) {
        const data = await this.getDataFiles();

        const index = data.findIndex(item => item.id === parseInt(id));

        if(index === -1) {
            throw Error('Data not found')
        }

        const element = data[index];

        const updateObject = {
            ...element,
            ...content
        }

        data.splice(index, 1);

        return await this.writeFiles([
            ...data,
            updateObject
        ])
    }
}

module.exports = new Database();