export default class Item {

    constructor (
        readonly idItem: number, 
        readonly category: string, 
        readonly description: string,
        readonly price: number,
        readonly width: number = 0,
        readonly height: number = 0,
        readonly lenght: number = 0,
        readonly weight: number = 0
    ) {}

    getVolume() {
        return (this.width / 100) * (this.height / 100) * (this.lenght / 100);
    }

    getDensity() {
        return this.weight / this.getVolume();
    }

    getFreight() {
        const freight = 1000 * this.getVolume() * (this.getDensity() / 100);
        if(freight < 10) return 10;
        return freight;
    }
}