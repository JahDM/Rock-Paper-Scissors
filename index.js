function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
let array = ["Rock", "Paper", "Scissors"];
let result = getComputerChoice(array);
let playerScore = 0;
let computerScore = 0;

//console.log(result);

const userInput = prompt("Rock, Paper, Scissors");
//console.log(userInput);

const playerSelection = userInput.toLowerCase();
const computerSelection = result.toLowerCase();
//console.log(computerSelection);
//console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      ;playerScore++ 
      return "You win";
      
    } else if (computerSelection === "scissors") {
      ;computerScore++ 
      return "You lose";
      
    } else return "Draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      ;playerScore++ 
      return "You win";
      
    } else if (computerSelection === "paper") {
      ;computerScore++ 
      return "You lose";
      
    } else return "Draw";
  } else (playerSelection === "scissors"); {
    if (computerSelection === "paper") {
      ;playerScore++ 
      return "You win";
      
    } else if (computerSelection === "rock") {
      ;computerScore++ 
      return "You lose";
      
    } else return "Draw";
  }
}

//console.log(playRound(playerSelection, computerSelection));
//console.log(playerScore);
//console.log(computerScore);
let gameVerdict;

function playGame() {
  for (let i = 0; i < 5; i++) {
    if (playerScore <= 5) {
      gameVerdict = "Player has won"
    } else {
      gameVerdict = "Computer has won"
    }
  }
  return gameVerdict;
}
console.log(playerScore);

playGame();



  
  

