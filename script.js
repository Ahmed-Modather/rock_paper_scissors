//First: function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1; //random 

    if (ranNum===1) {
        return 'Rock';
    } else if (ranNum===2 ) {
        return 'Paper';
    } else {
      return 'Scissors';  
    }
    
}

function getUserChoice() {
    let choice = prompt("Enter 'Rock' or 'Paper' or 'Scissors'");
    choice = choice.toLowerCase();
    console.log(choice)

    while (choice !=="rock" && choice!=="paper" && choice!=="Scissors") {
        choice = prompt("Please, enter valid value! [Rock/Paper/Scissors]")
        choice = choice.toLowerCase();
    }
    return choice;
}
