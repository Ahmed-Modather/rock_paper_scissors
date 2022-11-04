//First: function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1; //random 

    if (ranNum===1) {
        return 'Rock';
    } else if (ranNum===2 ) {
        return 'Paper';
    } else {
      return 'Scissors'  
    }
    
}

