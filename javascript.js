
function bgTransition(){

    btn.remove() 
    const body = document.querySelector("body");
    body.style.cssText = "background-image: url(imgs/options2.jpg)"

    const title = document.querySelector("#title");
    title.style.cssText = "animation: none; position: static; margin-top: 0"
}

const btn = document.querySelector("#playBtn");
btn.addEventListener("click", bgTransition);












function getComputerChoice() { //per ottenere la scelta casuale del computer

    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3); //genera un numero casuale tra 0 e 2, perchè il 3 non è incluso
    return options[randomNumber];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) { //per giocare il primo round e ottenere il vincitore del round

    playerSelection = playerSelection.toLowerCase();
    let winner;

    if(computerSelection === "rock" && playerSelection === "rock") {
        playerScore += 1;
        computerScore += 1;
        winner = `Tie! (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1;
        winner = `You Win! Paper beats Rock (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "rock" && playerSelection === "scissors") {
        computerScore += 1;
        winner = `You Lose! Rock beats Scissors (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "paper" && playerSelection === "rock") {
        computerScore += 1;
        winner = `You Lose! Paper beats Rock (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "paper" && playerSelection === "paper") {
        playerScore += 1;
        computerScore += 1;
        winner = `Tie! (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        playerScore += 1;
        winner = `You Win! Scissors beats Paper (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        playerScore += 1;
        winner = `You Win! Rock beats Scissors (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        winner = `You Lose! Scissors beats Paper (${playerScore} - ${computerScore})`;
    }
    else if(computerSelection === "scissors" && playerSelection === "scissors") {
        playerScore += 1;
        computerScore += 1;
        winner = `Tie! (${playerScore} - ${computerScore})`
    }

    return winner;
}

/*function game() { //per far giocare l'intera partita (composta in questo caso da 5 round)
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?", "");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}*/

function showWinner() { //per determinare il vincitore
    if(computerScore > playerScore) {
        console.log(`You lost! (${playerScore} - ${computerScore})`)
    }
    else if(computerScore === playerScore) {
        console.log(`Tie! (${playerScore} - ${computerScore})`)
    }
    else {
        console.log(`You Won! (${playerScore} - ${computerScore})`)
    }
}

game();
showWinner();


