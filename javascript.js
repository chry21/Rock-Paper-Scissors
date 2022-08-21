
function bgTransition(){
    tableBtn.remove() 

    //body
    const body = document.querySelector("body");
    body.style.cssText = "background-image: url(imgs/options2.jpg)"
    
    //title
    const title = document.querySelector("#title");
    title.style.cssText = `animation: none; 
                           position: static; 
                           margin-top: 0; 
                           text-shadow: 
                                    0 0 1px #fff, 
                                    0 0 2px #fff, 
                                    0 0 3px #fff, 
                                    0 0 5px #f5e105, 
                                    0 0 8px #f5e105, 
                                    0 0 30px #f5e105, 
                                    0 0 60px #f5e105,
                                    0 0 80px #f5e105;`;

    //subtitle
    const subtitle = document.createElement("h3");
    subtitle.textContent = "welcome to the third table of the underground gambling den \"Rock Paper Scissors\"";
    body.appendChild(subtitle);
    
    //play button
    const playBtn = document.createElement("button");
    playBtn.setAttribute("id", "playBtn");
    playBtn.textContent = "START THE MATCH";                         
    body.appendChild(playBtn);
    playBtn.addEventListener("click", showOptions)
}

function showScore() {
    console.log("ciao")
}



function showOptions() {
    playBtn.remove();
    const body = document.querySelector("body");

    const divsContainer = document.createElement("div");
    divsContainer.setAttribute("id", "divsContainer");
    
    //player buttons container
    const divPlayerBtns = document.createElement("div");
    divPlayerBtns.setAttribute("id", "playerBtns");

    //button options
    //rock
    const playerRockBtn = document.createElement("button");
    playerRockBtn.setAttribute("id", "playerRockBtn");
    const computerRockBtn = document.createElement("button");
    computerRockBtn.setAttribute("id", "computerRockBtn");

    //paper
    const playerPaperBtn = document.createElement("button");
    playerPaperBtn.setAttribute("id", "playerPaperBtn");
    const computerPaperBtn = document.createElement("button");
    computerPaperBtn.setAttribute("id", "computerPaperBtn");

    //scissors
    const playerScissorsBtn = document.createElement("button");
    playerScissorsBtn.setAttribute("id", "playerScissorsBtn");
    const computerScissorsBtn = document.createElement("button");
    computerScissorsBtn.setAttribute("id", "computerScissorsBtn");

    //computer buttons options 

    const divComputerBtns = document.createElement("div");
    divComputerBtns.setAttribute("id", "computerBtns");

    body.appendChild(divsContainer);
    divsContainer.appendChild(divPlayerBtns);
    divsContainer.appendChild(divComputerBtns);

    divPlayerBtns.appendChild(playerRockBtn);
    divPlayerBtns.appendChild(playerPaperBtn);
    divPlayerBtns.appendChild(playerScissorsBtn);

    divComputerBtns.appendChild(computerRockBtn);
    divComputerBtns.appendChild(computerPaperBtn);
    divComputerBtns.appendChild(computerScissorsBtn);

}

const tableBtn = document.querySelector("#tableBtn");
tableBtn.addEventListener("click", bgTransition);











/*
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

function game() { //per far giocare l'intera partita (composta in questo caso da 5 round)
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?", "");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

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

*/
