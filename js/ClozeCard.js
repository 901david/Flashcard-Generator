
exports.clozeCard = function(text, cloze) {
  this.text = text;
  this.answer = cloze;
  if (this.text.includes(this.answer)) {
    var cardFront = this.text.replace(cloze, "...");
    console.log("Question is: " + cardFront);
    console.log("THe answer is: " + this.answer);
  }
  else {
    console.log("Question not formatted properly.");
  }

};
