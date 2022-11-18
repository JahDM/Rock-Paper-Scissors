function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
let array = ["Rock", "Paper", "Scissors"];
let result = getComputerChoice(array);

console.log(result);
const computerSelection = result;
let userInput = prompt("Rock, Paper, Scissors");
console.log(userInput);
const playerSelection = userInput.toLocaleLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You win";
    } else if (computerSelection === "Scissors") {
      return "You lose";
    } else return "Draw";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return "You win";
    } else if (computerSelection === "Paper") {
      return "You lose";
    } else return "Draw";
  } else {
    if (computerSelection === "Paper") {
      return "You win";
    } else if (computerSelection === "Rock") {
      return "You lose";
    } else return "Draw";
  }
}

console.log(playRound(playerSelection, computerSelection));
