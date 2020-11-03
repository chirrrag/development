// Higher Order Functions(HOF)
// Call Back Functions(CBF)

// hof ==> functions those taked functions as an arugment.
// cbf ==> functions which are passed as an argument to a function.

function getFirstName(fullName)
{
    // fullName == "Chirag Ved Parkash Sapra"
    // fullName.split(" ") i.e. splitting on the basis of space, and the output will be stored in an array, by splitting the spaces.
    fullName = fullName.split(" ");
    // ["Chirag", "Ved", "Parkash", "Sapra"]
    return fullName[0];
}
function getLastName(fullName)
{
    fullName = fullName.split(" ");
    return fullName[fullName.length - 1];
}

function printNames(fullName, fun)
{
    let name = fun(fullName);
    console.log(name);
}
// in this printNames function is an higher order function, whereas higherorder function is a callback function.

// Function Call
printNames("Chirag Ved Parkash Sapra", getFirstName);
printNames("Chirag Ved Parkash Sapra", getLastName);

// .split(" ") splits the String into different strings onthe basis of spaces, and feef them into an Array.