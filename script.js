// score variables:
let computerScoreCount = 0;
let userScoreCount = 0;
let round = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const gameResults = document.querySelector('.game-status .results');
const computerScore = document.querySelector('.game-status .computer-score');
const userScore = document.querySelector('.game-status .user-score')
const score = document.querySelector('.game-status');

rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    round++;
    if (playerSelection === computerSelection) {
        gameResults.textContent = "A tie!"
    } else {
        switch (computerSelection) {
            case 'rock':
                if (playerSelection === 'paper') {
                    gameResults.textContent = "You win! Paper beats Rock";
                    userScoreCount++;
                } else {
                    gameResults.textContent = "You lose! Rock beats Scissors";
                    computerScoreCount++;
                }
                break;
            case 'paper':
                if (playerSelection === 'scissors') {
                    gameResults.textContent = "You win! Scissors beats Paper";
                    userScoreCount++;
                } else {
                    gameResults.textContent = "You lose! Paper beats Rock";
                    computerScoreCount++;
                }
                break;
            case 'scissors':
                if (playerSelection === 'rock') {
                    gameResults.textContent = "You win! Rock beats Scissors";
                    userScoreCount++;
                } else {
                    gameResults.textContent = "You lose! Scissors beats paper";
                    computerScoreCount++;
                }
                break;
            default:
                gameResults.textContent = "what?";
        }
    }

    computerScore.textContent = "Computer Score: " + computerScoreCount;
    userScore.textContent = "User Score: " + userScoreCount;
    if (round == 5) {
        round = 1;

        if (computerScoreCount > userScoreCount) {
            gameResults.textContent += " You lose the game! Choose again to play again!";
        } else if (computerScoreCount < userScoreCount) {
            gameResults.textContent += " You win the game! Choose again to play again!";
        } else {
            gameResults.textContent += " The game ends in a tie! Choose again to play again!"
        }

        computerScoreCount = 0;
        userScoreCount = 0;
    }
}

function game() {
    let userScoreCount = 0;
    let computerScoreCount = 0;

    for (let index = 0; index < 5; index++) {
        let results = playRound(prompt("Rock, paper, or scissors?"), getComputerChoice())
        if (results.includes("win")) {
            userScoreCount++;
        } else if (results.includes("lose")) {
            computerScoreCount++;
        }
        console.log(results);
    }

    // print out results of game
    if (userScoreCount === computerScoreCount) {
        console.log("It's a tie!");
    } else if (userScoreCount < computerScoreCount) {
        console.log("Computer wins!");
    } else if (userScoreCount > computerScoreCount) {
        console.log("You win!")
    }
}