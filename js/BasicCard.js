var requireBot = require("./app.js");
exports.BasicCard = function (front, back) {
  this.front = front;
  this.back = back;
  var backSavedAnswer = this.back;
  var count = 0;
  var secsLeft = 8;
  var displayNumber = 8;

  this.displayCardConsole = function () {

    console.log (this.front);


    function timerFun () {

      if (count < secsLeft) {
        console.log("Time Left: " + displayNumber + " seconds");
        displayNumber-= 1;
        count+= 1;
        setTimeout (function () {timerFun()}, 1000);
      }
      else {
        console.log("Time's Up");
        console.log (backSavedAnswer);
        requireBot.botMovesUsOn();

      }
    };
    timerFun();
  };

};
