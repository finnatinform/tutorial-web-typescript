namespace Bundesliga {
    export abstract class Verein{
        name : string ;
    }
    export class Tabelle{
        [ index : number ] : Verein ;
    }
}