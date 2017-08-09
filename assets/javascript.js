

alert("PSYC! It's not Hangman, its the Psychic Game! Welcome!");

//Psychic Game:
	// make sure input type is correct
	// if guess is correct, increase wins and reset game
	// if guess is incorrect, reduce the number of guesses, add letter selected to "letters already used" and go around again
	// max number of tries needs to be set to 10

// Intro
alert("Try to guess what letter I'm thinking of. You get 10 tries. Press any key to start. Good Luck! ");

// create a var array with a-z letters

var letter= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];


// create variables with wins, losses, guesses left

var wins= 0;
var losses= 0;
var guessesLeft= 10;



//THis is the start of the funcion that will take place once a button is used

document.onkeyup = function(event) {

// collecting user input.
		var userGuess = event.key;

//create a random function for selecting a letter from the array
		var computerGuess = letter[Math.floor(Math.random() * letter.length)];

// compare guess to randomguess while also keeping track of guesses


		while (guessesLeft > 0) {
			prompt("What's your guess?");

		// computer guess and player guess are the same = win
		if( userGuess === computerGuess) {
			wins++;
			document.getElementById("win").innerHTML= wins;
			alert("You guessed it!");
			
			}
		// computer guess and player guess are NOT the same = wrong
		// reduce number of guesses and print letter used
		else {
			alert("Sorry, that is incorrect. Try again.");
			guessesLeft = guessesLeft - 1;
			document.getElementById("left").innerHTML = guessesLeft;
			document.getElementById("usedLetters").innerHTML = userGuess;
			}
		  }	
		
		}
	
		




// check to make sure valid input is picked by player
		// if(userGuess !== letter.length) {
		// 	alert(" Not a valid input. Please pick a letter between A-Z. ");
		// }








		
	











		