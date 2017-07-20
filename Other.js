// const http = require('http')
// const port = 8000
//
// const requestHandler = (request, response) => {
//   console.log(request)
//   response.end('This is a single response server.  Above, you can write, response.write(\'write something here...\');')
// }
//
// const server = http.createServer(requestHandler)
//
// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }
//
//   console.log(`server is listening on ${port}`)
// });

var variableNumber = 0;
var cardCreatedArray = [];
var currentVariableName;
var currentIndex = variableNumber - 1;

// Gives us a continuing variable scheme
function whatVariableToUse (frontArg, backArg) {
  variableNumber++;
  currentVariableName = { front: frontArg, back: backArg };
  cardCreatedArray.push(currentVariableName);
  console.log(cardCreatedArray);


};

// Determines what type of card to create based on which button is clicked.
function grabDataAndRun (){
  $(".clickHerePlease").click(function() {
    console.log("You clicked me");
    let questionArg = $("#frontCardData").val();
    let answerArg = $("#backCardData").val();
    let dataArg = $(this).attr("data-Choice");
    console.log(dataArg);
    if(dataArg === "basic") {
      console.log("You clicked me");
      whatVariableToUse(questionArg, answerArg);
        console.log(cardCreatedArray);
    }
    else if (dataArg === "cloze") {
      console.log("You clicked me");
      whatVariableToUse(questionArg, answerArg);
      console.log(cardCreatedArray);
    }
    else {
      console.log("This means something went fatally wrong.  Error.");
    }

});
};



// <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="displayCards">
//
// <img src="images/indexfront.jpg" alt"Front of Index Card" class="img-responsive pull-left imgBorder">
// <img src="images/indexback.jpg" alt"Back of Index Card" class="img-responsive pull-right imgBorder">
// </div>
$(document).ready(function() {
grabDataAndRun(currentVariableName);

});
