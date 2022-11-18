function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
let array = ["Rock", "Paper", "Scissors"];
let result = getComputerChoice(array);

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
      return "You win";
    } else if (computerSelection === "scissors") {
      return "You lose";
    } else return "Draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win";
    } else if (computerSelection === "paper") {
      return "You lose";
    } else return "Draw";
  } else (playerSelection === "scissors"); {
    if (computerSelection === "paper") {
      return "You win";
    } else if (computerSelection === "rock") {
      return "You lose";
    } else return "Draw";
  }
}
console.log(playRound(playerSelection, computerSelection));


  

