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

console.log(computerChoice);