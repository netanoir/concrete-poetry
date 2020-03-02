var fs = require("fs");
var moten = fs.readFileSync("./assets/fredMoten_theSalveTrade.txt", "utf-8");
var jordan = fs.readFileSync("./assets/juneJordan_poemAboutMyRights.txt", "utf-8");
var clifton = fs.readFileSync("./assets/lucilleClifton_slaveships.txt", "utf-8");
var alexander = fs.readFileSync("./assets/willAlexander-towardsThePrimevalLightnightField.txt", "utf-8");

var motenLines = moten.split("\n");
var jordanLines = jordan.split("\n");
var cliftonLines = clifton.split("\n");
var alexanderLines = alexander.split("\n");

var poetryAmalgam = new Array(motenLines, jordanLines, cliftonLines, alexanderLines);

poetryJSON = JSON.parse(poetryAmalgam);

console.log(poetryJSON);

// console.log(poetryAmalgam);

// get a random poem
// var randomPoem = poetryAmalgam[ Math.floor(Math.random() * poetryAmalgam.length)];
// console.log(randomPoem);
