/*
How will the user give input?
◦ Use the prompt() function, and save the user’s answer to a variable. 
    ▪ That variable will store the user’s choice for each round.

• How will the computer choose a move?
◦ Using a function that generates a computer’s move using Math.floor(Math.random.()…) functions.
    ▪ If the computer generates 1, then return the string “rock”;
    ▪ If cpu generates 2, then return the string “paper”;
    ▪ If cpu generates 3, then return the string “scissors”;

• How many rounds will there be?
◦ 3 rounds.
◦ Each round will complete after the computer and user choices are compared, with the results being saved to a variable.
    ▪ “userPoints”
    ▪ “computerPoints”
        • When either the userPoints or computerPoints variable value reaches 3, then the game is over and a winner is chosen.
*/
let userOption = '';

/* 
   playerChoice(); function is for "linting" or preventing any discrepencies in incorrect spelling of any of the options. 
   
   The goal of 39-45 was to make spelling errors for "rock", "paper" or "scissors" irrelevant.
   
   For instance, if a user spells rock like "rOcK", userOption1 will save the characters after the first letter, and make them lowercase.
   Ex.) userOption1 = "ock"

   userOption will then equal the first character of the user's answer, which will also be set to upper case no matter what.
   Ex.) userOption = "R"
   
   Finally, userOption is set to equal the result of concatenation between userOption's previous value, "R", plus userOption1 "ock".
   Ex.) userOption = "Rock"

*/
let userChoice;

let rock = document.querySelector('#rock');
rock.addEventListener('click', chooseRock);

let paper = document.querySelector('#paper');
paper.addEventListener('click', choosePaper);

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', chooseScissors);

// The following functions will return the choice of the button pressed to userChoice.
function chooseRock() {
    userChoice = 'Rock';
    return;
}

function choosePaper() {
    userChoice = 'Paper';
    return;
}

function chooseScissors() {
    userChoice = 'Scissors';
    return;
}

function playerChoice() {

    userOption = window.prompt("Rock, paper, or scissors?");

    let userOptionAppend = userOption.slice(1, userOption.length).toLowerCase();

    userOption = userOption[0].toUpperCase();

    userOption = userOption + userOptionAppend;
}

let computerOption;

let playerPoints = 0;

let computerPoints = 0;

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerOption = "Rock";
        console.log(`The computer threw ${computerOption}!`);
    } else if (randomNumber === 1) {
        computerOption = "Paper";
        console.log(`The computer threw ${computerOption}!`);
    } else if (randomNumber === 2) {
        computerOption = "Scissors"
        console.log(`The computer threw ${computerOption}!`);
    } else {
        console.log("Error...");
    }
    return;
}

/* 
==================
playRound Function 
==================

function playRound(userOption, computerOption) {
    if (userOption === "Rock" && computerOption === "Scissors") {
        console.log("You win this round!");
        playerPoints++;
    } else if (userOption === "Paper" && computerOption == "Rock") {
        console.log("You win this round!");
        playerPoints++;
    } else if (userOption === "Scissors" && computerOption === "Paper") {
        console.log("You win this round!");
        playerPoints++;
    } else if (userOption === "Rock" && computerOption === "Paper") {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
    } else if (userOption === "Paper" && computerOption === "Scissors") {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
    } else if (userOption === "Scissors" && computerOption === "Rock") {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
    } else {
        console.log("Tie!");
    };
}
*/

/* 
When called on, this function will iterate 5 times. Each iteration will call upon three functions:
playerChoice() which will prompt the user to input data (either rock, paper, or scissors), while making it case-insensitive.
computerPlay() will generate a computer choice every time it is executed.
and playRound() will compare both userOption and computerOption to print to the console who is the winner, and add points to the winner point variable.
*/
function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice();
        computerPlay();
        playRound(userOption, computerOption);
    };

    if (computerPoints < playerPoints) {
        console.log("You won!")
   } else if (playerPoints < computerPoints) {
       console.log("You lost!")
   } else {
       console.log("It's a tie!")
   };

   return;
}