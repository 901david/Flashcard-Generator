var clozeData = require("./ClozeCard.js");
var basicData = require("./BasicCard.js");
var inquirer = require("inquirer");
var recNum;
var count = 0;

var cardArrayToShow = [];
var moveOn = false;
var indexMover = 0;
var showingIndexValue = 0;
exports.botMovesUsOn = function () {

  inquirer.prompt([
    {
      type: "list",
      name: "moveOn",
      message: "What would you like to do next?",
      choices: ["Review Previous Card", "Review Current Card Again", "Move on To Next Card", "Quit and end reviewing"]
    }]).then(function(moveOnObj) {
       if (moveOnObj.moveOn === "Review Previous Card") {
          if (showingIndexValue === 0) {
            console.log("Sorry, you are already on the first card.");
            // Need to figrue this out
            exports.botMovesUsOn();
          }
          else {
            showingIndexValue--;
            cardArrayToShow[showingIndexValue].displayCardConsole();
          }
       }
       else if (moveOnObj.moveOn === "Review Current Card Again") {
         cardArrayToShow[showingIndexValue].displayCardConsole();
       }
       else if (moveOnObj.moveOn === "Move on To Next Card") {
         if (showingIndexValue === cardArrayToShow.length -1) {
           console.log("That was the last card.");
           exports.botMovesUsOn();
         }
         else {
           showingIndexValue++;
           cardArrayToShow[showingIndexValue].displayCardConsole();
         }

       }
       else if (moveOnObj.moveOn === "Quit and end reviewing") {
         console.log("");
       }
       else {
         console.log("A fatal error has occurred.");
       }
    });
};
function areWeDone(start, end) {
    if (start === end -1) {
      var showingIndexValue = 0;
      cardArrayToShow[showingIndexValue].displayCardConsole();

        // cardArrayToShow[i].displayCardConsole();


    }

};
function createBasicQ (basicFront, basicBack, number) {
  if ((basicFront.trim() === "") || (basicBack.trim() === "")) {
    console.log("You did not enter the correct specifications.  Try again.");

  }
  else {
    cardArrayToShow.push(new basicData.BasicCard(basicFront, basicBack, number));
    areWeDone(count, recNum);


  }
};
function createCloze (clozeFront, clozeBack, number) {
  if ((clozeFront.trim() === "") || (clozeBack.trim() === "")) {
    console.log("You did not enter the correct specifications.  Try again.");

  }
  else if (clozeFront.trim().includes(clozeBack.trim())) {
    cardArrayToShow.push(new clozeData.ClozeCard(clozeFront, clozeBack, number));
    areWeDone(count, recNum);
  }
  else {
    console.log("You did not enter the correct specifications.  Try again.");
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
        console.log("");
      }
      };

        askQuestion();
    });
