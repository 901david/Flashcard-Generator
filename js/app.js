var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var argOne = process.argv[2];
var argTwo = process.argv[3];


// Basic Questions
 // var questionOne = basicData.basicCard("What is the square root of 16?", "4.");
 // var questionTwo = basicData.basicCard("What is 4 x 5?", "20.");
 // var questionThree = basicData.basicCard("What is 20 / 2?", "10.");
 // var questionFour = basicData.basicCard("Who was the first President?", "George Washington.");
 // var questionFive = basicData.basicCard("What's the opposite of hot?", "Cold.");
 var cozeQOne = clozeData.clozeCard("George Washington was the first president of the United States", "George Washington");
