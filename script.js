//First: function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1; //random 

    if (ranNum===1) {
        return 'rock';     //(*)first charachters edited from capital to small
    } else if (ranNum===2 ) {
        return 'paper';
    } else {
      return 'scissors';  
    }
    
}

//Second: function ask user to enter ‘Rock’ or ‘Paper’ or ‘Scissors’ and certain
// the user will enter proper value.
function getUserChoice() {
    let choice = prompt("Enter 'Rock' or 'Paper' or 'Scissors'");
    choice = choice.toLowerCase();

    while (choice !=="rock" && choice!=="paper" && choice!=="scissors") {   //(*)Scissors=>scissors
        choice = prompt("Please, enter valid value! [Rock/Paper/Scissors]")
        choice = choice.toLowerCase();
    }
    return choice;
}

//Third: function take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    const player = playerSelection();
    const computer = computerSelection();
    
    if (player===computer) {
        let x = `The score is tied!
    Your play: ${player} 
    Computer play: ${computer}`;
        return x;

    } else if ((player==="rock"&&computer==="scissors")||(player==="scissors"&&computer==="paper")||(player==="paper"&&computer==="rock")) {
        let x= `Congratulations, You Won!
        Your play: ${player} 
        Computer play: ${computer}
        * ${player} beats ${computer}`;
        return x;

    } else {
        let x = `Unfortunately, You Lose!
        Your play: ${player} 
        Computer play: ${computer}
        * ${computer} beats ${player}`;
        return x;
    } 
}   

//game logic function
function game() {
    let playerScore = 0;
    let computerScore= 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(getUserChoice, getComputerChoice);

        if (round.slice(0,1)==="C") {
            playerScore += 1;
            console.log(round)
        } else if (round.slice(0,1)==="U") {
            computerScore += 1;
            console.log(round)
        } else {
            console.log(round)
        }

        let roundResult = `The Result of this round
        You: ${playerScore} & the computer: ${computerScore}`;
        console.log(roundResult)
     }

    if (playerScore>computerScore) {
        console.log("You Won THE GAME")
    } else {
        console.log("GAME OVER")
    }
} 


game();  //start



