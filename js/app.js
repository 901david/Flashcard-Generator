

var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var argOne = process.argv[2];
var argTwo = process.argv[3];

function createBasicQ (basicFront, basicBack) {
    if ((basicFront === undefined) || (basicBack === undefined)) {
      console.log("You did not enter the correct specifications.  Try again.");

    }
    else {
      var randomQ =new basicData.BasicCard(basicFront, basicBack);
    }
};
function createCloze (clozeFront, clozeBack) {
  if ((clozeFront === undefined) || (clozeBack === undefined)) {
    console.log("You did not enter the correct specifications.  Try again.");

  }
  else {
    var randomQ2 =new clozeData.ClozeCard(clozeFront, clozeBack);
  }
};
// createBasicQ(argOne, argTwo);
createBasicQ(argOne, argTwo);
