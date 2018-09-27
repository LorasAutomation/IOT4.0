export class Machine {
    name: string;
    paramList: Parameter[];

    constructor(name?: string, paramList?: Parameter[]){
        this.name= name;
        this.paramList = paramList;
    }
}

export class Parameter{
    name: string;
    type: ParameterType;
    value: number | XYValue[] ;

    constructor(name?: string, type?: ParameterType, value?: number | XYValue[]){
        this.name = name;
        this.type = type;
        this.value = value;
    }
}
export class XYValue{
    x: any;
    y: any;

    constructor(x?:any,y?:any){
        this.x = x;
        this.y = y;
    }
}

export enum ParameterType{
    SUMMARY,
    BASIC,
    GUAGE
}