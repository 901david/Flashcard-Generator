
exports.ClozeCard = function(text, cloze) {
  this.fullAnswer = text;
  this.removedPortion = cloze;
  if (this.fullAnswer.includes(this.removedPortion)) {
    this.displayText = this.fullAnswer.replace(this.removedPortion, "...");
    console.log("Question is: " + this.displayText);
    console.log("The answer is: " + this.displayText.replace("...", this.removedPortion));

  }
  else {
    console.log("Question not formatted properly.");
  }

};
