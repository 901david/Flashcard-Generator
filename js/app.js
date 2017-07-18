// var clozeData = require("./ClozeCard.js");
// var basicData = require("./BasicCard.js");
// Basic Questions
 // var questionOne = basicData.basicCard("What is the square root of 16?", "4.");
 // var questionTwo = basicData.basicCard("What is 4 x 5?", "20.");
 // var questionThree = basicData.basicCard("What is 20 / 2?", "10.");
 // var questionFour = basicData.basicCard("Who was the first President?", "George Washington.");
 // var questionFive = basicData.basicCard("What's the opposite of hot?", "Cold.");
 // var cozeQOne = clozeData.clozeCard("George Washington was the first president of the United States", "George Washington");


// This will display the choices and determine which type of card to create
function whichTypeOfCard () {
  let formGeneration = '<div id="basicInput" class="hide"><label for="example-text-input" class="col-2 col-form-label">Enter Data for Front of Card (Question)</label><div class="col-4"><input class="form-control" type="text" value="Enter Front of Card Data" id="frontCardData"></div><label for="example-text-input" class="col-2 col-form-label">Enter Data for Back of Card (Answer)</label><div class="col-4"><input class="form-control" type="text" value="Enter Back of Card data" id="backCardData"></div></div>';
  let whatDoYouChoose = "<h3>What type of flash card would you like to create?</h3><br/>" + formGeneration + "<div data-Choice='basic' class='btn btn-success' id='basicCardSelector'>Basic Card</div><div class='btn btn-warning' id='clozeCardSelector'>Cloze Card</div>";
    $("#displayCards").append(whatDoYouChoose);
    console.log(whatDoYouChoose);
    $("#basicCardSelector").on("click", function () {
      $("#displayCards").empty();
      
    });
    $("#clozeCardSelector").on("click", function () {

    });
    function whatWasYourChoice (dataIdArg) {

    };
};
whichTypeOfCard();
