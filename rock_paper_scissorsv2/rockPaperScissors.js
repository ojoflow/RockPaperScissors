
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let score = document.getElementById('score');
let playerChoice;
let num = 0;
let compNum = 0;
let play = document.getElementById('play');
let screenPrompt = document.getElementById('prompt');


rock.addEventListener('click',
    () => {
        playerChoice = document.getElementById("rock").innerText.toLocaleLowerCase();
        randomNumber();
        PlayRound(playerChoice);
    });

paper.addEventListener('click',
    () => {
        playerChoice = document.getElementById("paper").innerText.toLocaleLowerCase();
        randomNumber()
        PlayRound(playerChoice);
        
    });

scissors.addEventListener('click',
    () => {
        playerChoice = document.getElementById("scissors").innerText.toLocaleLowerCase();
        randomNumber();
        PlayRound(playerChoice);
        
    });
play.addEventListener('click',
    () => {
            num = 0;
            compNum = 0;
            score.textContent = `You : ${num} Computer : ${compNum}`;
            document.getElementById("rock").disabled = false;
            document.getElementById("paper").disabled = false;
            document.getElementById("scissors").disabled = false;
        }
    
)
let randomNumber = () => {
 
        min = Math.ceil(1);
        max = Math.floor(4);
        return Math.floor(Math.random() * (max - min) + min);
       
};

let computerChoice = () => {
    switch(randomNumber()) {
        case 1:
           
            return "rock";
        case 2:
          
            return "paper";
        case 3:
           
            return "scissors";
    }   
}

let stopGameCheck = (num,compNum) =>{
    if(num === 5) {
        alert("You won the game!");
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            screenPrompt.textContent = "Click 'Play again' to play a new game";
    } else if (compNum === 5) {
        alert("You loss the game!");
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            screenPrompt.textContent = "Click 'Play again' to play a new game";
    } 
}
const Decision = (playerChoice, compChoice, condition) => {
   
    if(condition === 'Won') {
            num += 1;       
    } else if (condition === 'Loss') {   
        compNum += 1;    
    } 
    alert(`You picked ${playerChoice}, the computer picked ${compChoice}. Round ${condition}!`);
    score.textContent = `You : ${num} Computer : ${compNum}`;
    stopGameCheck(num,compNum);
};

const PlayRound = (playerChoice) => {
    let compChoice = computerChoice();
    (playerChoice==="rock" && compChoice ==="paper") ? Decision(playerChoice,compChoice, 'Loss') :
    (playerChoice==="rock" && compChoice ==="scissors")  ? Decision(playerChoice,compChoice, 'Won') :
    (playerChoice==="scissors" && compChoice ==="rock") ? Decision(playerChoice,compChoice, 'Loss') :
    (playerChoice==="scissors" && compChoice ==="paper") ? Decision(playerChoice,compChoice, 'Won') :
    (playerChoice==="paper" && compChoice ==="rock") ? Decision(playerChoice,compChoice, 'Won') : 
    (playerChoice==="paper" && compChoice ==="scissors") ? Decision(playerChoice,compChoice, 'Loss') :
    Decision(playerChoice,compChoice, 'Tie');   
   
}
