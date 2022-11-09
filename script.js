//
// * ---Note---* the new comments will begun with "$"
//
// $ In this program, I used the callback method a lot to control the sequence of the program logic.
//
// $ I distinguish between "The Result" and "The Final Result". *the final result comes after playing 5 rounds.
//
let number_of_rounds = 0; // $ we aim to count how much round the user will play before show the result of the game.
let playerScore = 0;
let computerScore = 0;
let isFirstTime = true; // $ when the game is played for first time.
let hasResultBefore = false; // $ the final result viewed before? .

const body = document.querySelector('body');

// $ Function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
	let ranNum = Math.floor(Math.random() * 3) + 1; //random

	if (ranNum === 1) {
		return 'rock'; //(*)first charachters edited from capital to small
	} else if (ranNum === 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function getUserChoice() {
	// $ this function edited to depend on the page events 'user clicks'. When the user choice "rock" or "paper" or "scissors" the function know
	let choice;
	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			choice = e.target.id;
			console.log(choice);
			playRound(choice, getComputerChoice()); // $ callback
		});
	});
}

function playRound(player, computer) {
	if (player === computer) {
		// $ this function is refactored to proper the new version of the game with UI.
		let x = `The score is tied!
		Your play: ${player} 
    Computer play: ${computer}`;
		game(x); // $ callback
	} else if (
		(player === 'rock' && computer === 'scissors') ||
		(player === 'scissors' && computer === 'paper') ||
		(player === 'paper' && computer === 'rock')
	) {
		let x = `Congratulations, You Won!
        Your play: ${player} 
        Computer play: ${computer}
        ${player} beats ${computer}. `;
		game(x); // $ callback
	} else {
		let x = `Unfortunately, You Lose!
        Your play: ${player} 
        Computer play: ${computer}
        ${computer} beats ${player}. `;
		game(x); // $ callback
	}
}

//game logic function
function game(round) {
	number_of_rounds++;

	// $ to increase the scores depending on the result from playRound()
	if (round.slice(0, 1) === 'C') {
		playerScore += 1;
		console.log(round);
	} else if (round.slice(0, 1) === 'U') {
		computerScore += 1;
		console.log(round);
	} else {
		console.log(round);
	}

	// $ to form the result
	let roundResult = `
	The Result of this round
        You: ${playerScore} 
		Computer: ${computerScore}`;
	console.log(roundResult);

	// $ A check to delete the previous result from the page if exist.
	if (!isFirstTime) {
		const delnode = document.getElementById('delete_me');
		delnode.parentNode.removeChild(delnode);
	}

	// $ to show the result in the page we setting its HTML and logic.
	const result = document.createElement('div');
	result.classList.toggle('style_result'); // $ the class 'style_result' exist in the CSS file.
	result.setAttribute('id', 'delete_me'); // $ Id to remove the old result if exist.
	result.textContent = `${round}
	 ${roundResult}`;
	body.appendChild(result);
	isFirstTime = false;

	// $ $ A check to delete the previous  *Final result from the page if exist.
	if (hasResultBefore && number_of_rounds === 1) {
		const delResult = document.getElementById('delete_final_result');
		body.removeChild(delResult);
		const delnode = document.getElementById('delete_me');
		delnode.parentNode.removeChild(delnode);
	}

	// $ to show the final result when the user play 5 rounds and complet the game with the computer.
	if (number_of_rounds === 5) {
		if (playerScore > computerScore) {
			number_of_rounds = 0;
			isFirstTime = true;

			const final_result = document.createElement('div');
			final_result.classList.toggle('style_final_result'); // $ the class 'style_final_result' exist in the CSS file.
			final_result.setAttribute('id', 'delete_final_result'); // $ Id to remove the old result if exist.
			final_result.textContent = 'You Won THE GAME';
			final_result.style.backgroundColor = 'gold';
			const allButtons = document.querySelector('#buttons');
			body.insertBefore(final_result, allButtons);
			hasResultBefore = true;
			playerScore = 0;
			computerScore = 0;
			number_of_rounds = 0;
		} else {
			number_of_rounds = 0;
			isFirstTime = true;

			const final_result = document.createElement('div');
			final_result.classList.toggle('style_final_result'); // $ the class 'style_final_result' exist in the CSS file.
			final_result.setAttribute('id', 'delete_final_result'); // $ Id to remove the old result if exist.
			final_result.textContent = 'GAME OVER';
			final_result.style.backgroundColor = 'red';
			const allButtons = document.querySelector('#buttons');
			body.insertBefore(final_result, allButtons);
			hasResultBefore = true;
			playerScore = 0;
			computerScore = 0;
			number_of_rounds = 0;
		}
	}
}

getUserChoice(); // Start the game by get the user choice.
