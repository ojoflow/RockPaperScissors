playGame = () => {
alert("Rock, Paper, Scissors! Let's play!"); 
randomNumber();
let playerChoice = prompt("Please pick Rock, Paper, or Scissors").toLocaleLowerCase();;
while(!["rock","paper","scissors"].includes(playerChoice)) {
    let choice = prompt("Invalid response. Please pick Rock, Paper, or Scissors").toLocaleLowerCase();
    if(["rock","paper","scissors"].includes(choice)) playerChoice = choice;  
}
winCondition(playerChoice,compChoice);
}

randomNumber = () => {
    return Math.floor(Math.random(3,1) * (3 - 1) + 1);
}
const computerChoice = () => {
    
    switch(randomNumber()) {
        case 1:
            //alert("Rock!");
            return "rock";
        case 2:
            //alert("Paper!");
            return "paper";
        case 3:
            //alert("Scissors!");
            return "scissors";
    }   

}
let compChoice = computerChoice();
winCondition = (playerChoice,compChoice) => {
    
    if(playerChoice === compChoice) {
        alert(`You picked ${playerChoice}, the computer picked ${compChoice}. It's Tie!`);
        playGame();
    } else if (playerChoice==="rock" && compChoice ==="paper") {
        alert(`You picked ${playerChoice}, the computer picked ${compChoice}. You Lose!`);
        playGame(); 
    } else if (playerChoice==="rock" && compChoice ==="scissors") {
        alert(`You picked ${playerChoice}, the computer picked ${compChoice}. You Win!`);
        playGame(); 
    }  else if (playerChoice==="scissors" && compChoice ==="rock") {
        alert(`You picked ${playerChoice}, the computer picked ${compChoice}. You Lose!`);
        playGame();
    } else if (playerChoice==="scissors" && compChoice ==="paper") {
        prompt(`You picked ${playerChoice}, the computer picked ${compChoice}. You Win!`);
        playGame(); 
    } else if (playerChoice==="paper" && compChoice ==="rock") {
        prompt(`You picked ${playerChoice}, the computer picked ${compChoice}. You Win!`);
        playGame(); 
    } else if (playerChoice==="paper" && compChoice ==="rock") {
        prompt(`You picked ${playerChoice}, the computer picked ${compChoice}. You Lose!`);
        playGame(); 
    }
}
playGame();