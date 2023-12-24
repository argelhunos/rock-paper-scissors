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

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        let results = playRound(prompt("Rock, paper, or scissors?"), getComputerChoice())
        if (results.includes("win")) {
            userScore++;
        } else if (results.includes("lose")) {
            computerScore++;
        }
        console.log(results);
    }

    // print out results of game
    if (userScore === computerScore) {
        console.log("It's a tie!");
    } else if (userScore < computerScore) {
        console.log("Computer wins!");
    } else if (userScore > computerScore) {
        console.log("You win!")
    }
}

game()