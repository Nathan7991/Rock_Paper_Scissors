let userChoice;

let computerOption;

function playRound(userChoice) {
    
    computerOption = Math.floor(Math.random() * 3);

    if (userChoice === "Rock" && computerOption === 2) {
        console.log("You win this round!");
        playerPoints++;
    } else if (userChoice === "Paper" && computerOption == 0) {
        console.log("You win this round!");
        playerPoints++;
    } else if (userChoice === "Scissors" && computerOption === 1) {
        console.log("You win this round!");
        playerPoints++;
    } else if (userChoice === "Rock" && computerOption === 1) {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
    } else if (userChoice === "Paper" && computerOption === 2) {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
    } else if (userChoice === "Scissors" && computerOption === 0) {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
    } else {
        console.log("Tie!");
    };
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', chooseRock);

let paper = document.querySelector('#paper');
paper.addEventListener('click', choosePaper);

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', chooseScissors);

/* The following functions will return the choice of the
   button pressed and also callback the playRound function
   so that the computer choice is also determined each time
   the button is clicked, and a result is determined.
*/

function chooseRock() {
    userChoice = 'Rock';
    playRound(userChoice);
}

function choosePaper() {
    userChoice = 'Paper';
    playRound(userChoice);
}

function chooseScissors() {
    userChoice = 'Scissors';
    playRound(userChoice);
}

//User and Computer Points Variables 
let playerPoints = 0;

let computerPoints = 0;

/* 
When called on, this function will iterate 5 times. Each iteration will call upon three functions:
playerChoice() which will prompt the user to input data (either rock, paper, or scissors), while making it case-insensitive.
computerPlay() will generate a computer choice every time it is executed.
and playRound() will compare both userOption and computerOption to print to the console who is the winner, and add points to the winner point variable.

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice();
        computerPlay();
        playRound(userOption, computerOption);
    };
       return;
}
*/
if (computerPoints < playerPoints) {
    console.log("You won!")
} else if (playerPoints < computerPoints) {
       console.log("You lost!")
} else {
   console.log("It's a tie!")
};