
function bgTransition(){

    tableBtn.remove() 
    const body = document.querySelector("body");
    body.style.cssText = "background-image: url(imgs/options2.jpg)"

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

    const subtitle = document.createElement("h3");
    subtitle.textContent = "welcome to the third table of the underground gambling den \"Rock Paper Scissors\"";
    subtitle.style.cssText = `text-align: center; 
                              color: white; 
                              font-size: 30px; 
                              font-family: 'Exo 2', sans-serif; 
                              position: relative; 
                              bottom: 40px;
                              text-shadow: 
                                        0 0 1px #fff, 
                                        0 0 2px #fff, 
                                        0 0 1px #fff, 
                                        0 0 5px #f5e105, 
                                        0 0 8px #f5e105, 
                                        0 0 10px #f5e105, 
                                        0 0 30px #f5e105,
                                        0 0 60px #f5e105;`;
    body.appendChild(subtitle);
    
    const playBtn = document.createElement("button");
    playBtn.setAttribute("id", "playBtn");
    playBtn.textContent = "START THE MATCH";
    playBtn.style.cssText = `position: absolute;
                            left: 43%;
                            top: 50%;
                            height: 60px;
                            width: 230px;
                            color: white;
                            background-color: transparent;
                            border-color: white;
                            font-size: 20px;
                            font-family:'Exo 2', sans-serif; 
                            text-shadow: 
                                    0 0 1px #fff, 
                                    0 0 2px #fff, 
                                    0 0 1px #fff, 
                                    0 0 5px #fff, 
                                    0 0 8px #fff, 
                                    0 0 10px #fff, 
                                    0 0 30px #fff,
                                    0 0 60px #fff;
                            box-shadow: 
                                    0 0 5px #fff, 
                                    0 0 5px #fff, 
                                    0 0 5px #fff, 
                                    0 0 5px #fff, 
                                    0 0 1px #fff, 
                                    0 0 1px #fff, 
                                    0 0 0px #fff,
                                    0 0 55px #fff;`;
                            
    body.appendChild(playBtn);
    playBtn.addEventListener("click", showOptions)
}

function showOptions() {
    playBtn.remove();
    const body = document.querySelector("body");
    const divBtns = document.createElement("div");
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    rockBtn.style.cssText = `background-image: url(imgs/rock-icon.jpg);
                            background-size: 150px;
                            height: 240px;
                            width: 150px;`;
    
    paperBtn.style.cssText = `background-image: url(imgs/paper-icon.jpg);
                              background-size: 150px;
                              height: 240px;
                              width: 150px;`;

    scissorsBtn.style.cssText = `background-image: url(imgs/scissors-icon.jpg);
                                 background-size: 150px;
                                 background-repeat: no-repeat;
                                 height: 240px;
                                 width: 150px;`;

    divBtns.style.cssText = `display: flex;
                             margin-top: 150px;
                             gap: 10px;`;

    body.appendChild(divBtns);
    divBtns.appendChild(rockBtn);
    divBtns.appendChild(paperBtn);
    divBtns.appendChild(scissorsBtn);

    rockBtn.addEventListener("click", () => {
        console.log("ciao")
    });
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
