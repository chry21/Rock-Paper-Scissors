let playerPoints = 0;
let computerPoints = 0;
let playerSelection;


function bgTransition(){    //CAMBIA LO SFONDO, PASSANDO ALLA SECONDA SCHERMATA
    tableBtn.remove();
    music.remove();

    //body
    const body = document.querySelector("body");
    body.style.cssText = "background-image: url(imgs/newBg.jpg)"
    
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
    const divIcons = document.getElementById("divIcons");
    const subtitle = document.createElement("h3");
    subtitle.textContent = "welcome to the third table of the underground gambling den \"Rock Paper Scissors\"";
    body.insertBefore(subtitle, divIcons)
    
    //play button
    const playBtn = document.createElement("button");
    playBtn.setAttribute("id", "playBtn");
    playBtn.textContent = "START THE MATCH";                         
    body.appendChild(playBtn);
    playBtn.addEventListener("click", () => {
        showScore();
        showOptions();
    });
}

function showScore() {    //MOSTRA IL PUNTEGGIO DEL PLAYER E DEL COMPUTER                                        
    const divIcons = document.getElementById("divIcons");
    divIcons.style.display = "flex";

    const divScore = document.getElementById("divScore");
    divScore.style.display = "flex";

    const playerScore = document.getElementById("playerScore");
    playerScore.textContent = `${playerPoints}`;    

    const computerScore = document.getElementById("computerScore");
    computerScore.textContent = `${computerPoints}`;    
} 

function showOptions() {   //MOSTRA LE OPZIONI PER IL PLAYER E IL COMPUTER                                     
    playBtn.remove();

    const divBtns = document.getElementById("divBtns");
    divBtns.style.display = "flex";
}

function playRound(playerSelection, computerSelection) {         //GIOCA UN ROUND
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    let roundWinner;
    if(playerSelection === computerSelection) {
        roundWinner = `Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        roundWinner = "You lose! Paper beats Rock!";
        computerPoints += 1;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        roundWinner = "You win! Rock beats scissors!";
        playerPoints += 1;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        roundWinner = "You win! Paper beats Rock!";
        playerPoints += 1;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        roundWinner = "You lose! Scissors beat Paper";
        computerPoints += 1;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        roundWinner = "You lose! Rock beats Scissors!";
        computerPoints += 1;
    }
    else {
        roundWinner = "You win ! Scissors beat Paper!";
        playerPoints += 1;
    }

    updateScore(roundWinner);
    if(playerPoints + computerPoints === 5){
        showWinner()
    }
}

function getComputerChoice() {     //GENERA LA SCELTA CASUALE DEL COMPUTER                  
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3); //genera un numero casuale tra 0 e 2, perchè il 3 non è incluso
    return options[randomNumber];
}

function updateScore(roundWinner) {           //AGGIORNA LO SCORE DELLA PARTITA AL TERMINARE DI OGNI ROUND    
    const body = document.querySelector("body");               
    const playerScore = document.getElementById("playerScore");
    playerScore.textContent = `${playerPoints}`;

    const computerScore = document.getElementById("computerScore");
    computerScore.textContent = `${computerPoints}`; 

    const para = document.getElementById("roundWinner");
    para.textContent = roundWinner;
}

function showWinner() {
    const endRemove = document.getElementById("endRemove");
    endRemove.remove();

    const body = document.querySelector("body");
    const winner = document.createElement("h1");
    ;
    if(playerPoints > computerPoints) {
        winner.textContent = "YOU WON!";
        winner.setAttribute("id", "winnerWin")
    }
    else {
        winner.textContent = "YOU LOST!"
        winner.setAttribute("id", "winnerLose")
    }
    body.appendChild(winner);
    timedRefresh();
}

function timedRefresh() {
    setTimeout("location.reload(true);", 3000)
}

const music = document.querySelector("iframe");
const tableBtn = document.querySelector("#tableBtn");
tableBtn.addEventListener("click", bgTransition);

//addEventlisteners

const playerRockBtn = document.getElementById("playerRockBtn");  
playerRockBtn.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection);
});

const playerPaperBtn = document.getElementById("playerPaperBtn");
playerPaperBtn.addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection);
});

const playerScissorsBtn = document.getElementById("playerScissorsBtn");
playerScissorsBtn.addEventListener("click", () => {
    playerSelection = "scissors";
    playRound(playerSelection);
});



