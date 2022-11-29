function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

let gameVerdict = document.getElementById('results');
gameVerdict.style.fontSize = '24px';
let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById('rock');
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  // console.log(playerSelection)
  playRound();
});

let paper = document.getElementById('paper');
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  //  console.log(playerSelection)
  playRound();
});

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  // console.log(playerSelection)
  playRound();
});

function playRound() {
  console.log('INSIDE PLAY ROUND');
  let arr = ['Rock', 'Paper', 'Scissors'];

  // const userInput = prompt("Rock, Paper, Scissors");
  // const playerSelection = userInput.toLowerCase();

  let computerSelection = getComputerChoice(arr);
  computerSelection = computerSelection.toLowerCase();
  let playerHasWon = false;

  switch (playerSelection) {
    case 'paper':
      playerHasWon = computerSelection === 'rock';
      break;
    case 'rock':
      playerHasWon = computerSelection === 'scissors';
      break;
    case 'scissors':
      playerHasWon = computerSelection === 'paper';
      break;
    default:
      return 'Wrong';
  }

  if (playerHasWon) {
    playerScore++;
    console.log(playerScore, computerScore);
    gameVerdict.textContent = 'You win';
  } else {
    if (computerSelection === playerSelection) {
      console.log(playerScore, computerScore);
      gameVerdict.textContent = 'Its a draw';
    }
    computerScore++;
    console.log(playerScore, computerScore);
    gameVerdict.textContent = 'You lose';
  }
}


