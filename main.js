
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter Your Weapon: Rock, Paper, or Scissors. ").toLowerCase();
    switch (humanChoice) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return "Wrong Weapon";
    }    
}

let humanScore    = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if(humanChoice == "Wrong Weapon") {
        gameMessages.innerHTML += "<p>Invalid input. Please choose Rock, Paper, or Scissors.</p>";
        return false;
    }

    gameMessages.innerHTML += "<p>Computer has chosen " + computerChoice + "</p>";
    gameMessages.innerHTML += "<p>Human has chosen " + humanChoice + "</p>";

    if(computerChoice === humanChoice) {

        gameMessages.innerHTML += "<p>It's a Tie!</p>";

    } else if (
        (humanChoice === "Rock" && computerChoice === "Paper") || 
        (humanChoice === "Paper" && computerChoice === "Scissors") || 
        (humanChoice === "Scissors" && computerChoice === "Rock")
     ) {

        console.log("You Lose This Round!")
        computerScore++; 

    } else {

        console.log("You Win This Round!")
        humanScore++; 
    }  

    return true;
}

function playGame() {
    let roundNumber = 1;
    const gameMessages = document.getElementById('gameMessages');
    gameMessages.innerHTML = "";

    while(humanScore < 5 && computerScore < 5) {

        gameMessages.innerHTML += "<p>Round " + roundNumber + "</p>";

        const computerSelection = getComputerChoice();
        const humanSelection    = getHumanChoice();

        const validRound = playRound(humanSelection, computerSelection);
        if(validRound) {
            gameMessages.innerHTML += "<p>Score: Human " + humanScore + " - Computer " + computerScore + "</p>";
        }

        roundNumber++;
    }

    if(humanScore === 5) {
        gameMessages.innerHTML += "<p>Congratulations! You won the game!</p>";
    } else {
        gameMessages.innerHTML += "<p>You Lost to a Bloody Machine! ~ SAD ~</p>";
    }
}

document.getElementById('startButton').addEventListener('click', playGame);

