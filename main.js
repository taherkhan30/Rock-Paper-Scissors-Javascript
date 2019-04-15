function startGame() {
  var compScore = 0;
  var userScore = 0;

  for (var i = 1; i <= 3; i++) {
    var winner = round();
    if (winner == 1) {
      userScore ++;
    } else if (winner == -1) {
      compScore ++;
    }
  }

  if (compScore > userScore) {
    console.log('Computer wins!');
  } else {
    console.log('user wins!');
  }
}



function round(){
  // initialize score variables to zero
  // var userScore = 0;
  // var compScore = 0;
  // prompt user
  var userChoice = prompt("rock paper scissors");
  // computer random choice
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  }
  // // call compare and parse parameters to choice 1 and choice 2
  console.log ("user" + userChoice);
  console.log("computer" + computerChoice);
  var msg = compare(userChoice, computerChoice);
    console.log(msg);
}



  var compare = function(choice1,choice2) {
      if (choice1 === choice2) {
          console.log("tie");
           return 0;
        } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                console.log("user wins");
                return 1;
            } else if (choice2 === "paper"){
                console.log("computer wins");
                return 2;
           }else if (choice1 === "paper") {
                  if (choice2 === "rock") {
                    console.log("user wins");
                return 1;
              }  else if (choice2 === "scissors"){
                  console.log("computer wins");
                return 2;
              }
          } else if (choice1 === "scissors") {
                  if (choice2 === "rock") {
                      console.log("computer wins");
                    return 2;
                } else if (choice2 === "paper"){
                      console.log("user wins");
                  return 1;
              }
          }


  }

}

startGame();
