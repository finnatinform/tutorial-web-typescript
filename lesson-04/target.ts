// Remember: Every javscript code is typescript code
// Variables -> let or var

// String
let HString : string = "Finn";

// Number
let HDecimal : number = 22 ;
let HHex : number = 0xf00d ;
let HBinary : number = 0b1010 ;
let HOctal : number = 0o744;
// Boolean
let HBoolean : boolean = true ;

// Arrays
let HVariant1 : number[] = [ 1234 , 5678 , 9101 ] ;
// or
let HVariant2 : Array<number> = [ 1234 , 5678 , 9101 ] ;

// Tuples
let HTuple : [ string , number ] ;
HTuple = [ "Hallo" , 42 ] ;
// Error
// HTuple = [ 42 , "Tschüss" ] ;
let HFromTuple : string = HTuple[0].substr(1);
HTuple[ 3 ] = "asd" ;

// Any
let HDoofeVariable : any ;
HDoofeVariable = "ABC" ;
HDoofeVariable = 1234 ;
HDoofeVariable += 16 ;

// Cool Things
let HSentence : string = "Hello, my name is Finn an i am ${ HDecimal } years old." ;