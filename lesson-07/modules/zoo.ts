class Zoo{
    name : string ;
    constructor( _Name : string ){
        this.name = _Name;
    }

    welcomeGuests():void{
        console.log("Willkommen im "+this.name+"!");
    }
}

let DortmunderZoo : Zoo = new Zoo("Dortmunder Tiergarten");
export = DortmunderZoo ;