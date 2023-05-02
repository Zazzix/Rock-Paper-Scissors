const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length); 

    const item = choices[randomIndex];

    return item;
}

console.log(getComputerChoice(choices));