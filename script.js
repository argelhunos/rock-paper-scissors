function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "A tie!"
    } else {
        switch (computerSelection) {
            case 'rock':
                if (playerSelection === 'paper') {
                    return "You win! Paper beats Rock";
                } else {
                    return "You lose! Rock beats Scissors";
                }
            case 'paper':
                if (playerSelection === 'scissors') {
                    return "You win! Scissors beats Paper";
                } else {
                    return "You lose! Paper beats Rock";
                }
            case 'scissors':
                if (playerSelection === 'rock') {
                    return "You win! Rock beats Scissors";
                } else {
                    return "You lose! Scissors beats paper";
                }
            default:
                return "what?";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))