// To pick some portion of Data from the whole file, we will use "CHEERIO" module

const { html } = require("cheerio");
let cheerio = require("cheerio");
let fs = require("fs");

let htmlKaData = fs.readFileSync("./index.html", "utf-8");

// Loading the whole html data into cheerio

let ch = cheerio.load(htmlKaData);


//------------------------------------------------------------------------------
// Now, we will extract h1's Data from Cheerio
// let h1KaData = ch("h1");

// console.log(h1KaData);

// This will give us h1 data in the form of weird object, which is very difficult to understand for a begineer. So, we will get the data in the form of text, rather than object format.
// --------------------------------------------------------------------------

let h1KaData = ch("h1").text();
// console.log(h1KaData);
// This will give us all the output of all h1 tags.

let pKaData = ch("p");
console.log(pKaData.length);

// This will tell us about the total number of paragraph tags existing into html file.

pKaData = ch("p").text();
console.log(pKaData);
// This will give us all the content written inside all the paragraph tags inside index.html file

