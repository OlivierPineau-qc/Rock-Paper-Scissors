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
  // compare the results. Rock beats paper and scissors. Paper beats rock, Scissors beats paper. Tie if same
  if(playerSelection === computerSelection) {
    let message = `The game is a tie, both chose ${playerSelection}`
    return message
  } else if( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ) {
    playerScore += 1

    let message = `You win, ${playerSelection} beats ${computerSelection}`
    return message
  } else if( (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper") ) {
    computerScore += 1

    let message = `Computer won, ${computerSelection} beats ${playerSelection}`

    return message
  }
}

// console.log(singleRoundGame(prompt("Enter a choice between rock, paper, scissors"), getComputerChoice()))

// game best of 5
function game() {
  for(let i = 0; i < 5; i++) {
    console.log(singleRoundGame(prompt("Enter a choice between rock, paper, scissors"), getComputerChoice()))
    console.log(`${playerScore} --- ${computerScore}`)
    if(playerScore == 3) {
      console.log(`You won with a score of ${playerScore} to ${computerScore}`)
      break;
    } else if (computerScore == 3) {
      console.log(`You lost with a score of ${computerScore} to ${playerScore}`)
      break;
    }
  }
}

game()