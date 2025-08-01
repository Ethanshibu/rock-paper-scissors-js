const buttons = document.querySelectorAll('.choice-button');
let humanChoice = '';
let computerChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        humanChoice = event.currentTarget.getAttribute('data-choice');
        console.log("You chose: " + humanChoice);
        document.getElementById('myTextBox').value = humanChoice;

        computerChoice = getComputerChoice();
        console.log("Computer chose: " + computerChoice);
        document.getElementById('myTextBox2').value = computerChoice;

        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        document.getElementById('myTextBox3').value = result;
    });
}
