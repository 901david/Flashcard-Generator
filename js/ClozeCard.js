
exports.clozeCard = function(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  var isItInIt = text.indexOf(cloze);
  if (isItInIt === -1){
  var cardFront = text.replace(cloze, "...");
  console.log(cardFront);
  var cardBack = cloze;
  console.log(cardBack);
};

};
