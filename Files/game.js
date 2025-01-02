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


const prompt = require('prompt-sync')();
/**
 * Gets the choice selected by the player
 * @returns {string} the choice of the player or human
 */
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors): ");
    return choice.toLowerCase();
}

/**
 * Simulates playing a round of the rock, paper, scissors, game
 * @param humanChoice the choice of the human
 * @param computerChoice the choice of the computer 
 */
function playRound(humanChoice, computerChoice) {
    // if human and computer choices match
    if (humanChoice === computerChoice) {
        console.log(`TIE! ${humanChoice} is the same as ${computerChoice}!`)
    }
    // scenarios where the player wins
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }

    // scenarios where the computer wins
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

/**
 * Plays five rounds of rock, paper, scissors, and displays the score of the computer and the player at the end
 */
function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log(`Tied! Your score of ${humanScore} is the same as the computer's score of ${computerScore}!`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lost with your score of ${humanScore}, which is less than the computer's score of ${computerScore}!`);
    }
    else {
        console.log(`You won with your score of ${humanScore}, which exceeds the computer's score of ${computerScore}!`);
    }
}

playGame();