function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  console.log("INSIDE PLAY ROUND");
  let arr = ["Rock", "Paper", "Scissors"];

  const userInput = prompt("Rock, Paper, Scissors");
  const playerSelection = userInput.toLowerCase();

  let computerSelection = getComputerChoice(arr);
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You win";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "You lose";
    } else return "Draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return "You win";
    } else if (computerSelection === "paper") {
      computerScore++;
      return "You lose";
    } else return "Draw";
  } else playerSelection === "scissors";
  {
    if (computerSelection === "paper") {
      playerScore++;
      return "You win";
    } else if (computerSelection === "rock") {
      computerScore++;
      return "You lose";
    } else return "Draw";
  }
}

//console.log(playRound(playerSelection, computerSelection));
//console.log(playerScore);
//console.log(computerScore);
//let gameVerdict;

/*function playGame() {
  console.log("INSIDE PLAY GAME");
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
    console.log(playerScore);
    if (playerScore == 5) {
      gameVerdict = "Player has won";
    } else if (computerScore == 5) {
      gameVerdict = "Computer has won";
    } else {
      gameVerdict = "It's a draw";
    }
  }
  return gameVerdict;
}

playGame();
*/
//console.log(gameVerdict);
console.log(playerScore);
