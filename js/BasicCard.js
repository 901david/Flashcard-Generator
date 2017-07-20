exports.BasicCard = function (front, back) {
  this.front = front;
  this.back = back;
  console.log (this.front);
  console.log(this.back);
  // $("#showCard").click(function () {
  //   $("#displayTextFront").html("<p>Card Front Reads: " + this.front + "</p>");
  // });
  //
  //
  // $("#displayTextFront").click(funtion () {
  //   $("#displayTextBack").html("<p>Card Back Reads: " + this.back + "</p>");
  // });
};
