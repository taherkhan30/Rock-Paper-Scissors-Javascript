// best out of 5 wins
// user selects an action


var userChoice = prompt("rock, paper or scissors");

// computer selects action
var compChoice = Math.random();



if (compChoice <= 0.33){

  compChoice = "rock";

}else if(0.34<= compChoice <=0.66){

  compChoice = "paper";

}else {

  compChoice ="scissors";
}

// console.log(compChoice);

// if user selects rock and computer selects paper
// then computer scores 1
// compare function
choice1 = userChoice;
choice2 = compChoice;


function compareChoice(choice1, choice2){

  if (choice1 === choice2){

    return ("the result is tie");

  }
  if (choice1 === "rock"){
      if(choice2 === "scissors"){
        return ("rock wins")
      }else {
          return ("paper wins");
      }
      }
  if (choice1 === "paper"){
      if(choice2 === "rock"){
          return ("paper wins")
      }else {
            return ("scissors wins");
        }
      }
    if (choice1 === "scissors"){
        if(choice2 === "rock"){
            return ("rock wins")
        }else {
              return ("scissors wins");
          }
        }

  }

  console.log(compareChoice(choice1,choice2));
