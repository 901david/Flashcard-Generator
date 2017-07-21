exports.BasicCard = function (front, back) {
  this.front = front;
  this.back = back;
  this.displayCardConsole = function () {
    console.log (this.front);
    var count = 0;
    var secsLeft = 8;
    var displayNumber = 8;
    function timerFun () {

      if (count < secsLeft) {
        console.log(displayNumber);
        displayNumber-= 1;
        count+= 1;
        setTimeout (function () {timerFun()}, 1000);
      }
      else {
        console.log("Time's Up");
        console.log (this.back);
      }
    };
    timerFun();
  };

};
