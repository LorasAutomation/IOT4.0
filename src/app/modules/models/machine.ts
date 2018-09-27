export class machine {
    name: string;
    performance: number;
    oee: number;
    partsProduced: number;
    maintainence: number;

    constructor(name?: string, performance?: number, oee?: number, partsProduced?: number, maintainence?: number){
        this.name= name;
        this.performance = performance;
        this.oee= oee;
        this.partsProduced = partsProduced;
        this.maintainence = maintainence;
    }
}