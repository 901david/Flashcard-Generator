
exports.ClozeCard = function(text, cloze) {
  this.fullAnswer = text;
  this.removedPortion = cloze;
  this.displayCardConsole = function () {

    console.log (this.displayText);
    var count = 0;
    var secsLeft = 8;
    var displayNumber = 8;

    function timerFun () {

      if (count < secsLeft) {
        console.log("Time Left: " + displayNumber + " seconds");
        displayNumber-= 1;
        count+= 1;
        setTimeout (function () {timerFun()}, 1000);
      }
      else {
        console.log("Time's Up");
        console.log (this.fullAnswer);
      }
    };
    timerFun();
  };
  this.displayText = this.fullAnswer.replace(this.removedPortion, "...");


};
