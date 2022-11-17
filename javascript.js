// GET COMPUTER CHOICE
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * (3))

  return choices[random];
}

let playerScore = 0
let computerScore = 0
// Single Round of the game
function singleRoundGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()
  let message = '';
  const returnArray = [];
  // compare the results. Rock beats paper and scissors. Paper beats rock, Scissors beats paper. Tie if same
  if(playerSelection === computerSelection) {
    message = `The game is a tie, both chose ${playerSelection}`
    playerScore += 0;
    computerScore += 0;
    returnArray.push(message, playerScore, computerScore);
  } else if( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ) {
    playerScore += 1

    if(playerScore === 5) {
      message = "YOU HAVE WON! LET'S GOOO!";
      disableButtons();
    } else {
      message = `You win, ${playerSelection} beats ${computerSelection}`
    }
    returnArray.push(message, playerScore, computerScore);
  } else if( (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper") ) {
    computerScore += 1

    if(computerScore === 5) {
      message = "YOU HAVE LOST! BETTER LUCK NEXT TIME!";
      disableButtons();
    } else {
      message = `Computer won, ${computerSelection} beats ${playerSelection}`
    }
    returnArray.push(message, playerScore, computerScore);
  }

  return returnArray;
}

// EVENT LISTENERS FOR PLAYER SELECTION BUTTONS 
const buttons = document.querySelectorAll("#playerSelectionContainer button");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let result = singleRoundGame(button.id, getComputerChoice());
    document.getElementById('winnerMessage').textContent = result[0];
    document.getElementById('playerScoreCounter').textContent = result[1];
    document.getElementById('computerScoreCounter').textContent = result[2];
    if(result[1] === 5 || result[2] === 5){
      document.getElementById('restartGame').textContent = "RELOAD THE PAGE TO RESTART";
    }
  });
});

const disableButtons = () => {
  buttons.forEach( (button) => {
    button.disabled = true;
  });
}