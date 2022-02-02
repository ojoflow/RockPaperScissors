
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let score = document.querySelector('.score');
let playerChoice;
let num = 0;
let compNum = 0;
let play = document.querySelector('.play');
let screenPrompt = document.getElementById('prompt');


rock.addEventListener('click',
    () => {
       
        playerChoice = "rock";
        randomNumber();
        PlayRound(playerChoice);
    });

paper.addEventListener('click',
    () => {
        
        playerChoice = "paper";
        randomNumber()
        PlayRound(playerChoice);
        
    });

scissors.addEventListener('click',
    () => {
        playerChoice = "scissors";
        randomNumber();
        PlayRound(playerChoice);
        
    });

play.addEventListener('click',
    () => {
            num = 0;
            compNum = 0;
            
        });

let randomNumber = () => {
        return Math.floor(Math.random() * (Math.floor(4) - Math.ceil(1)) +  Math.ceil(1));
       
};

function computerChoice() {
    switch(randomNumber()) {
        case 1:
           
            return "rock";
        case 2:
          
            return "paper";
        case 3:
           
            return "scissors";
    }   
}

const Decision = (condition) => {
   
    if(condition === 'Won') {
            num += 1;       
    } else if (condition === 'Loss') {   
        compNum += 1;    
    } 
  //  alert(`You picked ${playerChoice}, the computer picked ${compChoice}. Round ${condition}!`);
    score.textContent = `You : ${num} Computer : ${compNum}`;
    showEndScreen(num,compNum);
    
};

const PlayRound = (playerChoice) => {
    let compChoice = computerChoice();
    (playerChoice==="rock" && compChoice ==="paper") ? Decision('Loss') :
    (playerChoice==="rock" && compChoice ==="scissors")  ? Decision('Won') :
    (playerChoice==="scissors" && compChoice ==="rock") ? Decision('Loss') :
    (playerChoice==="scissors" && compChoice ==="paper") ? Decision('Won') :
    (playerChoice==="paper" && compChoice ==="rock") ? Decision('Won') : 
    (playerChoice==="paper" && compChoice ==="scissors") ? Decision('Loss') :
    Decision('Tie');   
}

// let stopGameCheck = (num,compNum) =>{
//     if(num === 5) {
//         alert("You won the game!");

//             // document.getElementById("rock").disabled = true;
//             // document.getElementById("paper").disabled = true;
//             // document.getElementById("scissors").disabled = true;
//             // screenPrompt.textContent = "Click 'Play again' to play a new game";
//     } else if (compNum === 5) {
//         alert("You loss the game!");
//             // document.getElementById("rock").disabled = true;
//             // document.getElementById("paper").disabled = true;
//             // document.getElementById("scissors").disabled = true;
//             // screenPrompt.textContent = "Click 'Play again' to play a new game";
//     } 
// }
let endScreen = document.querySelector('.end-screen')
let endScreenTitle = document.querySelector('.end-title')
let endScreenDescription = document.querySelector('.end-description')

function endScreenAnim() {
    endScreen.style.display = "block"
    setTimeout(function () {
        endScreen.style.opacity = 1
    }, 300)
    buttonStart.style.pointerEvents = "none"
}

function showEndScreen(num,compNum) {
    if (num === 5) {
       
        endScreenAnim()
    } else if (compNum === 5) {
        endScreenTitle.textContent = "You lost!"
        endScreenAnim()
    }
}