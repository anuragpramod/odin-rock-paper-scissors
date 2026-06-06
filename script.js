function getComputerChoice() {
    let choice = "scissors";
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
        default:
            break;
    } 
    return choice;
}

const computerChoice = getComputerChoice();


function getHumanChoice() {
    let choice = "scissors";
    switch (prompt("Enter 1 for rock, 2 for paper and 3 for scissors.")) {
        case "1":
            choice = "rock";
            break;
        case "2":
            choice = "paper";
        default:
            break;
    } 
    return choice;
}

const humanChoice = getHumanChoice();

console.log("Human - " + humanChoice);
console.log("Computer - " + computerChoice);