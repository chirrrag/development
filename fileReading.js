let fs = require("fs");
let cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html");

let ch = cheerio.load(htmlKaData);

//-----------------------------------------------------------------------------
// ---------------------Accessing Elements on the Basis of Claass--------------
//-----------------------------------------------------------------------------
// we will be accessing elements from class by using "."
let pKaData = ch(".pa").text();
// console.log(pKaData);

// Accessing single tag which is having multiple classs name
pKaData = ch(".pa.outer-p").text();
console.log(pKaData);

// Accessing single tag data from nested tags
pKaData = ch("ul li p").text();
console.log(pKaData);

//-------------------------------------------------------------------------
// --------Accessing Elements on the BAsis of I'D--------------------------
//-------------------------------------------------------------------------
// We can access elements by their respective i'ds by the use of "#"

let h1KaData = ch("#unique").text();
console.log(h1KaData);