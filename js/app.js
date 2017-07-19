// var clozeData = require("./ClozeCard.js");
// var basicData = require("./BasicCard.js");
console.log("COnncted");
// Basic Questions
 // var questionOne = basicData.basicCard("What is the square root of 16?", "4.");
 // var questionTwo = basicData.basicCard("What is 4 x 5?", "20.");
 // var questionThree = basicData.basicCard("What is 20 / 2?", "10.");
 // var questionFour = basicData.basicCard("Who was the first President?", "George Washington.");
 // var questionFive = basicData.basicCard("What's the opposite of hot?", "Cold.");
 // var clozeQOne = clozeData.clozeCard("George Washington was the first president of the United States", "George Washington");
 // var clozeQTwo = clozeData.clozeCard("Four is the square root of 16.", "Four");
 // var basicQ = basicData.basicCard("Why is having children so diffcult?", "Because it drains your energy, steals your soul, and depletes your piggy bank");
var variableNumber = 0;
var cardCreatedArray = [];
// Gives us a continuing variable scheme
function whatVariableToUse () {
  variableNumber++;
  return currentVariableName = "card" + variableNumber;

};
// Determines what type of card to create based on which button is clicked.
function grabDataAndRun (variableName) {
  variableName = currentVariableName;
  $(".clickHerePlease").click(function() {
    console.log("You clicked me");
    let questionArg = $("#frontCardData").val();
    let answerArg = $("#backCardData").val();
    let dataArg = $(this).attr("data-Choice");
    console.log(dataArg);
    if(dataArg === "basic") {
      whatVariableToUse();
      // HOw do I actually make this the value of currentVariableName
      variableName = basicData.basicCard("'" + questionArg + "'", "'" + answerArg + "'");
    }
    else if (dataArg === "cloze") {
      whatVariableToUse();
    }
    else {
      console.log("This means something went fatally wrong.  Error.");
    }
  });
};
grabDataAndRun(currentVariableName);


// <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="displayCards">
//
// <img src="images/indexfront.jpg" alt"Front of Index Card" class="img-responsive pull-left imgBorder">
// <img src="images/indexback.jpg" alt"Back of Index Card" class="img-responsive pull-right imgBorder">
// </div>
