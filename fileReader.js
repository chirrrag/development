// We will interact with f1.txt via fileReader module of Node.js
// we will use "require" module
let fs = require("fs");
// fs is file System, it is used to communicate with various files

let f1KaData = fs.readFileSync("./f1.txt");
// This will read f1.txt file and feed it into f1KaData
// console.log("F1 has :---" + f1KaData);

//--------------------------------------------------------------------------------------
// -----------------IMPORTANT, DONOT MISS!!!--------------------------------------------
//--------------------------------------------------------------------------------------



// let htmlKaData = fs.readFileSync("./index.html");
// We are feeding index.html file into htmlKaData variable by using File System module of node.js

// console.log(htmlKaData);
// This will give output in buffer, to get the output in String orr utf-9 format., we need to stringify that output.....




//------------------------------------------------------------------------------------
// Stringified output of index.html file

let htmlKaData = fs.readFileSync("./index.html", "utf-8");

console.log(htmlKaData);