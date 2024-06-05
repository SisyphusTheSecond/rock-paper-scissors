
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
    const humanChoice = prompt("Enter Your Weapon: ").toLowerCase();
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
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) 
    {
        alert("YOU LOSE!")
        computerScore++; 
    }

    if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock")) 
    {
        alert("YOU WIN!")
        humanScore++; 
    }    

    if(computerChoice == humanChoice)
    {
        alert("IT'S A TIE!")
    }
}


let humanScore    = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection    = getHumanChoice();

console.log("> Computer has chosen " + computerSelection);
console.log("> Human has chosen " + humanSelection);


