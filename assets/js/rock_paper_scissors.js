let userChoice;

let computerOption;

let br = document.createElement('br');

const display = document.querySelector('#outputDisplay');

let para = document.createElement('p');
para.setAttribute('id','displayPara');
display.appendChild(para);

let secondPara = document.createElement('p');
display.appendChild(secondPara);

let text; // Will hold the text for displayer.

let i = 0;

let speed = 60; //speed in of the typewriter effect in ms.

function typeWriter() {
    if (i < text.length) {
        document.getElementById('displayPara').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i === text.length) {
        i = 0;
        display.appendChild(br);
    }
}

var typeWriter2 = new Typewriter(secondPara, {
    loop: true
});

typewriter2.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();

console.log("Round 1!")

function decideWinner() {
    if (playerPoints > computerPoints) {
        text = 'Congratulations! You won!';
    } else if (computerPoints > playerPoints) {
        text = 'You lose!... Try again?';
        //Maybe I'll add an if...else statement based on the
        //player's decision to continue or quit if they lose.
    } else {
        text = 'Tie-breaker!';
    }
}

function announceRound() {
    if (round < 5) {
        text = `Round ${round}! `
        typeWriter(text);
    } else if (round === 5) {
        text = 'Final round! '
        typeWriter(text);
    } else {
        decideWinner();
        typeWriter(text);
    }
}

function playRound(userChoice) {
    
    computerOption = Math.floor(Math.random() * 3);

    if (userChoice === "Rock" && computerOption === 2) {
        console.log("You win this round!");
        playerPoints++;
        round++;
        announceRound();
    } else if (userChoice === "Paper" && computerOption == 0) {
        console.log("You win this round!");
        playerPoints++;
        round++;
        announceRound();
    } else if (userChoice === "Scissors" && computerOption === 1) {
        console.log("You win this round!");
        playerPoints++;
        round++;
        announceRound();
    } else if (userChoice === "Rock" && computerOption === 1) {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
        round++;
        announceRound();
    } else if (userChoice === "Paper" && computerOption === 2) {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
        round++;
        announceRound();
    } else if (userChoice === "Scissors" && computerOption === 0) {
        console.log("You lost! The computer wins this round!");
        computerPoints++;
        round++;
        announceRound();
    } else {
        console.log("Tie!");
        round++;
        announceRound();
    };
    //console.log(round);
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

let round = 1;

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

/*
if (round < 5) {
    console.log(`Round ${round}!`);
} else {
    console.log(`Final round!`);
};
*/

/*
let i = 0;

while(i < 5) {
    if (round < 5) {
        console.log(`Round ${round}!`);
    } else {
        console.log('Final round!');
    }
    i++
}


if (round < 5) {
    if (playerPoints > computerPoints) {
        console.log('Congratulations! You won!');
    } else if (computerPoints > playerPoints) {
        console.log('You lose!');
    }
} else {
    console.log('One more round!');
}
*/