
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

const computerSelection = getComputerChoice();
console.log("> Computer has chosen " + computerSelection);


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

const humanSelection = getHumanChoice();
console.log("> Human has chosen " + humanSelection);