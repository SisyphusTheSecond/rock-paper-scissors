
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

function playRound(humanChoice, computerChoice) {

    if(humanChoice == "Wrong Weapon") {
        console.log("Invalid input. Please choose Rock, Paper, or Scissors.")
        return false;
    }

    console.log("> Computer has chosen " + computerChoice);
    console.log("> Human has chosen " + humanChoice);

    if(computerChoice === humanChoice) {

        console.log("It's a Tie!")

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

let humanScore    = 0;
let computerScore = 0;

function playGame() {
    while(humanScore < 5 && computerScore < 5) {

        const computerSelection = getComputerChoice();
        const humanSelection    = getHumanChoice();

        const validRound = playRound(humanSelection, computerSelection);
        if(validRound) {
            console.log("Score: Human " + humanScore + " - Computer " + computerScore);
        }
    }

    if(humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("You Lost to a Bloody Machine! ~ SAD ~");
    }
}

playGame();

