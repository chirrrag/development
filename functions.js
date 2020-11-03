function sayHi()
{
    console.log("Hello!");
}
// sayHi();

function sayHi(name)
{
    console.log(name + " says Hi!");
}
// sayHi("Chirag Sapra");

//---------------------------------------------------------------------
// USING STRING INTERPOLATION METHOD
function saysHi(name)
{
    console.log(`${name} says Hellooooo!!!!!!!`);
}
// saysHi("Chirag Sapra");

//-----------------------------------------------------------------------
//------------------- FUNCTION AS VARIABLES

let fun = function sayHello(name)
{
    console.log(`${name} says Hiloo!`);
}
fun("Chirag Sapra");
// console.log(fun);
// sayHello("Chinu Sapra");

let result = fun("Chinu");
// console.log(result);

//-----------PART 2
let funny = function say(name)
{
    console.log(`${name} says Namastey!`);
    return 10;
}
let ans = funny("Chirag Ved Parkash Sapra");
// console.log(ans);

// --------------------------------------------------------------------
// ---------------------------QUIZES-----------------------------------

// let a = 10;
// if(true)
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);


// let a = 10;
// if(true)
// {
//     console.log(a);
// }
// console.log(a);

// if(true)
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);
