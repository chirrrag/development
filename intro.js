//Execution ==> top to bottom, and Left to Right
// No main Funcitons
// No Classes --> Public, private --> X

console.log("Hello World");

//-------------------------------------------------------------------
// Datatypes in Java
// float, int, double, char, boolean, short int
// In JavaScript, we use ES6 Syntax
// We use let || const
let a = 10;
let b = 20.6;
let c = "Hello, I am Chirag Sapra";
let d = true;
let e = [1,2,3,4,5];
let f = [1, "sayHello", 3.256, "4", 5, [1,2,3,4,5], 10, null, undefined];

// There is no such thing as 2-D Array in JavaScript
// Everything is an object in JavaScript
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//---------------------------------------------------------
//             UNDEFINED VALUE
let g;
// console.log(g);
//----------------------------------------------------------
//             NULL VALUES
let h = null;
// console.log(h);
//----------------------------------------------------------
                // FOR LOOP
for(let i = 0; i < f.length; i++)
{
    // console.log(f[i]);
}
//----------------------------------------------------------------
// Main Datatypes in JavaScript are:- undefined, null, String, Boolean, Number
// We can also append Strings in single codes:-
let i = 'Hello, I am Chirag Sapra';
// console.log(i);
//-----------------------------------------------------------------
// Datatype is set to undefined, if it is not initialised.
let j;
// console.log(j);
let k = undefined;
// console.log(k);
let l = null;
// console.log(l);


//--------------------------------------------------------------------
//                              SCOPE
// let ==> It works on block scope
if(true){
    let sayHi = true;
}
// console.log(sayHi);
// It will give us error, that sayHi is not defined, because sayHi is defined
// at inner block

//             const
// scope of const is also till a particular block, i.e. it is block scoped.
// const(Constant) is used to prevent re-initialisation of some objects, here we use const instead of let.
const pi = 3.14;
// pi = 10;
// It will give us error, "Assignment to a constant variable"