const choices = ['rock', 'paper', 'scissors'];
const playerSelection = prompt('Choose Rock, Paper or Scissors.').toLowerCase();


// Function to get the compurer choice.
function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length); 

    const item = choices[randomIndex];

    return item;
}

const computerSelection = getComputerChoice(choices);


// Function to play a single round.
function playRound(playerSelection, computerSelection) {
    switch(true) {
        case computerSelection === 'rock' && playerSelection === 'scissors':
        case computerSelection === 'paper' && playerSelection === 'rock':
        case computerSelection === 'scissors' && playerSelection === 'paper':
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case computerSelection === playerSelection:
            return `It's a tie! ${computerSelection} can't beat ${playerSelection}`;
        default:
            return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

console.log(playRound(playerSelection, computerSelection));