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
let userOption = window.prompt("Rock, paper, or scissors?");

/* 
   userOption1's function is for "linting" or preventing any discrepencies in incorrect spelling of any of the options. 
   
   The goal of 36-40 was to make spelling errors for "rock", "paper" or "scissors" irrelevant.
   
   For instance, if a user spells rock like "rOcK", userOption1 will save the characters after the first letter, and make them lowercase.
   Ex.) userOption1 = "ock"

   userOption will then equal the first character of the user's answer, which will also be set to upper case no matter what.
   Ex.) userOption = "R"
   
   Finally, userOption is set to equal the result of concatenation between userOption's previous value, "R", plus userOption1 "ock".
   Ex.) userOption = "Rock"

*/
let userOptionAppend = userOption.slice(1, userOption.length).toLowerCase();

userOption = userOption[0].toUpperCase();

userOption = userOption + userOptionAppend;

let computerOption = '';

let playerPoints;

let computerPoints;

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerOption = "Rock";
        console.log(computerOption);
    } else if (randomNumber === 1) {
        computerOption = "Paper";
        console.log(computerOption);
    } else if (randomNumber === 2) {
        computerOption = "Scissors"
        console.log(computerOption);
    } else {
        console.log("Error...");
        console.log(computerOption);
    }
    return;
}

function playRound(userOption, computerOption) {
    if (userOption === "Rock" && computerOption === "Scissors") {
        alert("You win this round!");
        playerPoints++;
    } else if (userOption === "Paper" && computerOption == "Rock") {
        alert("You win this round!");
        playerPoints++;
    } else if (userOption === "Scissors" && computerOption === "Paper") {
        alert("You win this round!");
        playerPoints++;
    } else if (userOption === "Rock" && computerOption === "Paper") {
        alert("You lost! The computer wins this round!");
        computerPoints++;
    } else if (userOption === "Paper" && computerOption === "Scissors") {
        alert("You lost! The computer wins this round!");
        computerPoints++;
    } else if (userOption === "Scissors" && computerOption === "Rock") {
        alert ("You lost! The computer wins this round!");
        computerPoints++;
    } else {
        alert ("Tie!");
    };
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        playRound;
        return;
    };
}