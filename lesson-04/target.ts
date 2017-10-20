interface CarBrand{
    GetSales():number ;

    producesMotorCycles?: boolean ;
}

abstract class GermanBrand{
    abstract producesInGermany() : boolean ;
}

class VolksWagen implements CarBrand{

    GetSales(): number {
        throw new Error("Method not implemented.");
    }

    constructor(){
        // constructor
    }
    public ConfessDieselGate():void{

    }

    private _IsSentenced : boolean ;

    get IsSentenced():boolean{
        return this._IsSentenced ;
    }
    set IsSentenced( _IsSentenced : boolean ){
        this._IsSentenced = _IsSentenced ;
    }


    static IsGerman : boolean = true ;
}

class Bmw extends GermanBrand implements CarBrand{

    producesInGermany() : boolean {
        throw new Error("Method not implemented.");
    }

    alias : string = "Bayrische Motorenwerke" ;

    GetSales(): number {
        throw new Error("Method not implemented.");
    }   
    
    // also for derivated Classes
    protected BuildFactory() : void{
        // todo
    }
    producesMotorCycles : boolean = true ;
}

class Porsche extends VolksWagen{
    // The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.
    readonly numberOfWheels : number = 4 ;

    GetSales() : number{
        throw new Error("Method not implemented.");
    }

    // Only for Class
    private BuildPanamera():void{

    }
}


enum ModelTypes{
    Kleinstwagen,
    Kleinwagen,
    SUV,
    Kombi,
    Limousine
}