// prompt user
var userChoice = prompt("Rock, paper or scissors?").toUpperCase();

// initialize score variables to zero
var userScore = 0;
var compScore = 0;

// computer random choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock".toUpperCase();
} else if(computerChoice <= 0.67) {
    computerChoice = "paper".toUpperCase();
} else {
    computerChoice = "scissors".toUpperCase();
}

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
      alert("Comp choice: " + computerChoice);
      alert("Draw, play again");
      userChoice = prompt("so, rock, paper or scissors?").toUpperCase();

        }
        else if (choice1 === "ROCK") {
            if (choice2 === "SCISSORS") {
              alert("Comp choice: " + computerChoice);
              alert("User wins this round");
              userScore +=1;
            }
            else {
              alert("Comp choice: " + computerChoice);
              alert("Computer wins this round");
              compScore +=1;
            }
        }

        else if (choice1 === "PAPER") {
            if (choice2 === "ROCK") {
              alert("Comp choice: " + computerChoice);
              alert("User wins this round");
              userScore +=1;
            }
            else {
              alert("Comp choice: " + computerChoice);
              alert("Computer wins this round");
              compScore +=1;
            }
        }
        else if (choice1 === "SCISSORS") {
            if (choice2 === "ROCK") {
              alert("Comp choice: " + computerChoice);
              alert("Computer wins this round");
              compScore +=1;
            }
            else {
              alert("Comp choice: " + computerChoice);
              alert("User wins this round");
              userScore +=1;
            }
        }

    else {
    alert("You have typed something incorrectly, try again");
    }
};

compare(userChoice, computerChoice);
