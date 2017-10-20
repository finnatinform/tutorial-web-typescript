// Named Function
function add( _X : number, _Y : number ):number{
    return _X+_Y ;
}

// Anonymous function
let HAdditionalFunction = function(_X : number,_Y : number) : number{return _Y+_Y;} ;

// Typing function Variables
let HTypedAdditionalFunction : ( _X : number, _Y : number) => number = HAdditionalFunction ;

// Default Parameters
function add2( _X : number, _Y : number , _DoubleSum : boolean = false ):number{
    var HResult : number = _DoubleSum? _X+_Y : (_X+_Y)*2;
    return HResult;
}
// optional Parameter
function add3( _X : number, _Y : number , _DoubleSum? : boolean ):number{
    var HResult : number = _DoubleSum? _X+_Y : (_X+_Y)*2;
    return HResult;
}
// Rest Parameters -> arguments in js
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Andreas", "Karsten", "Anja", "Holger");

// Overloads
function move( _X : number ) : void ;
function move( _X : number, _Y: number ):void ;

function move( _X : number , _Y? : number ):void{
    if( _Y ){
        // Do something
    }
}

function infiniteLoop():never{
    throw new Error('No End Point');
}