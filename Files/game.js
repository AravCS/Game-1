// variables to keep track of score
let humanScore = 0;
let computerScore = 0;
/**
 * Gives a random choice, either rock, paper, or scissors, which
 * models an arbitrary choice of the computer
 * @returns {string} the choice of the computer
 */
function getComputerChoice() {
    // returns a random number from 0 to 2
    let choices = Math.floor(Math.random() * 3);
    // get a random selection between the options
    if (choices === 0) {
        return "rock";
    }
    else if (choices === 1) {
        return "paper";
    }
    else if (choices === 2) {
        return "scissors";
    }
}

/**
 * Function to restart the game
 */
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    text.textContent = "Take your pick . . . ";
    score.style.color = "black";
    score.textContent = "0-0";
}

/**
 * Simulates playing a round of the rock, paper, scissors, game
 * @param humanChoice the choice of the human
 * @param computerChoice the choice of the computer 
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        text.textContent = `TIE! ${humanChoice} is the same as ${computerChoice}!`;
        score.textContent = `The score is ${humanScore} - ${computerScore}`;
    }

    // scenarios where the player wins
    else if ((humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")) {
        humanScore++;
        if (humanScore === 5) {
            score.textContent = `You beat the computer with a score of ${humanScore} - ${computerScore}`;
            score.style.color = "green";
            text.textContent =`You win! ${humanChoice} beats ${computerChoice}! (reset to play again)`;
            return;
        }
        text.textContent =`You win! ${humanChoice} beats ${computerChoice}!`;
        score.textContent = `The score is ${humanScore} - ${computerScore}`;
        score.style.color = "green";
    }

    // scenarios where the computer wins
    else if ((humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")
        || (humanChoice === "rock" && computerChoice === "paper")) {
        computerScore++;
        if (computerScore === 5) {
            score.textContent = `You lost to the computer with a score of ${humanScore} - ${computerScore}`;
            score.style.color = "red";
            text.textContent =`You win! ${humanChoice} beats ${computerChoice}! (reset to play again)`;
            return;
        }
        text.textContent =`You win! ${humanChoice} beats ${computerChoice}!`;
        score.textContent = `The score is ${humanScore} - ${computerScore}`;
        score.style.color = "red";
    }

    game.appendChild(text);
    game.appendChild(score);
}

const buttons = document.querySelectorAll('button');

const text = document.createElement("div");
text.style.marginTop = "10px";
text.style.fontSize = "25px";
text.style.textAlign = "center";
text.textContent = "Take your pick . . . ";

const score = document.createElement("div");
score.style.textAlign = "center";
score.textContent = "0-0";

const game = document.querySelector(".game");

game.appendChild(text);
game.appendChild(score);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("reset")) {
            resetGame();
        }
        else if (computerScore === 5 || humanScore === 5) {}
        else if (button.classList.contains("rock")) {
            playRound("rock", getComputerChoice());
        }
        else if (button.classList.contains("paper")) {
            playRound("paper", getComputerChoice());
        }
        else if (button.classList.contains("scissors")) {
            playRound("scissors", getComputerChoice());
        }
    });
})
