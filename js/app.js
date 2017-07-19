

var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var argOne = process.argv[2];
var argTwo = process.argv[3];

// console.log("argOne: " + argOne + " " + "argTwo: " + argTwo);

// Basic Questions
 // var questionOne = basicData.basicCard("What is the square root of 16?", "4.");
 // var questionTwo = basicData.basicCard("What is 4 x 5?", "20.");
 // var questionThree = basicData.basicCard("What is 20 / 2?", "10.");
 // var questionFour = basicData.basicCard("Who was the first President?", "George Washington.");
 // var questionFive = basicData.basicCard("What's the opposite of hot?", "Cold.");
 // var clozeQOne = clozeData.clozeCard("George Washington was the first president of the United States", "George Washington");
 // var clozeQTwo = clozeData.clozeCard("Four is the square root of 16.", "Four");
 // var basicQ = basicData.basicCard("Why is having children so diffcult?", "Because it drains your energy, steals your soul, and depletes your piggy bank");
function createBasicQ (basicFront, basicBack) {
    if ((basicFront === undefined) || (basicBack === undefined)) {
      console.log("You did not enter the correct specifications.  Try again.");

    }
    else {
      var randomQ = basicData.basicCard(basicFront, basicBack);
    }
};
function createCloze (clozeFront, clozeBack) {
  if ((clozeFront === undefined) || (clozeBack === undefined)) {
    console.log("You did not enter the correct specifications.  Try again.");

  }
  else {
    var randomQ2 = clozeData.clozeCard(clozeFront, clozeBack);
  }
};
// createBasicQ(argOne, argTwo);
createCloze(argOne, argTwo);
