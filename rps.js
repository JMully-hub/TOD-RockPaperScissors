function computerPlay(){
    let playResult = Math.floor(Math.random() * 3);
    if (playResult === 0){
        return "rock";
    }
    else if (playResult === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a draw!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beat Paper!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper!";
    }
}

function game(){
    let wins = 0;
    let losses = 0;
    let draws = 0;
    for (let i = 1; i < 6; i++){
        const inputString = prompt("Please type your selection, Rock, Paper or Scissors:");
        const playerSelection = inputString.toLowerCase();
        const computerSelection = computerPlay();
        console.log("Round " + i);
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("You Win!")){
            wins += 1;
        }
        else if (roundResult.includes("You Lose!")){
            losses += 1;
        }
        else {
            draws += 1;
        }
    }
    if (wins === losses){
        return "It's a draw! You drew with " + wins + " wins to " + losses + " losses and " + draws + " draw(s)";
    }
    else if (wins > losses){
        return "Well done! You won by " + wins + " wins to " + losses + " losses and " + draws + " draw(s)";
    }
    else if (losses > wins){
        return "Bad luck! You lost by " + wins + " wins to " + losses + " losses and " + draws + " draw(s)";
    }
}
console.log(game());



