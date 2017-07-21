var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var inquirer = require("inquirer");
var argOne = process.argv[2];
var argTwo = process.argv[3];
var recNum;
var count = 0;

function createBasicQ (basicFront, basicBack) {
  if ((basicFront === "") || (basicBack === "")) {
    console.log("You did not enter the correct specifications.  Try again.");

  }
  else {
    var randomQ =new basicData.BasicCard(basicFront, basicBack);
    randomQ.displayCardConsole();

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
inquirer.prompt([
  {
    name: "cardNumber",
    message: "How many cards total do you want to make?"
  }]).then(function(carNumObj) {
    recNum = carNumObj.cardNumber;

    function askQuestion () {

      if (count < recNum) {

      inquirer.prompt([
        {
          type: "list",
          name: "type",
          message: "What type of Flashcard do you want to create?",
          choices: ["Basic Card", "Cloze Card"]
        }]).then(function(carTypeObj) {
          cardType = carTypeObj.type;

          if (cardType === "Cloze Card"){
            inquirer.prompt([
              {
                name: "frontCardCloze",
                message: "What should the Question be?"
              }, {
                name: "backCardCloze",
                message: "What part do you want to remove? (Must match exactly)"
              }]).then(function(cardDataClozeObj) {
                createCloze(cardDataClozeObj.frontCardCloze, cardDataClozeObj.backCardCloze);
                count++;
                askQuestion();

              });
          }
          else {
            inquirer.prompt([
              {
                name: "frontCardBasic",
                message: "What should the Question be?"
              }, {
                name: "backCardBasic",
                message: "What should the answer be?"
              }]).then(function(cardDataBasicObj) {
                  createBasicQ(cardDataBasicObj.frontCardBasic, cardDataBasicObj.backCardBasic);
                  count++;
                  askQuestion();
              });
          }


        });
      }
      else {
        console.log("All cards created");
      }
      };

        askQuestion();
    });
