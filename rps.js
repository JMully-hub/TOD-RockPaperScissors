function computerPlay(){
    let playResult = Math.floor(Math.random() * 3);
    if (playResult === 0){
        return "Rock";
    }
    else if (playResult === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        draws += 1;
        return "It's a draw!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        wins += 1;
        return "You Win! Paper beats Rock!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        losses += 1;
        return "You Lose! Scissors beat Paper!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        losses += 1;
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        wins += 1;
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        losses += 1;
        return "You Lose! Rock beats Scissors!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        wins += 1;
        return "You Win! Scissors beats Paper!";
    }
}

let wins = 0;
let losses = 0;
let draws = 0;
const resultsDiv = document.getElementById("results");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            const playerSelection = button.value;
            const computerSelection = computerPlay();
            if(wins < 5 && losses < 5){
                resultsDiv.innerText = "\nYour Choice: " + playerSelection + "\n\nComputer: " + computerSelection  + 
                "\n\nResult: " + playRound(playerSelection, computerSelection) +"\n\n SCORES\nYou: " + wins + "\nComputer: " + losses +
                "\nDrawn: " + draws;
            }else{
                if(wins>losses){
                    resultsDiv.innerText = "YOU WIN!"
                }else{
                    resultsDiv.innerText = "YOU LOST!"
                    }
                }
            })
        })









