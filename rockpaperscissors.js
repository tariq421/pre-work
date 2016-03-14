////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === rock && computerMove === scissors){
        console.log("You win!");
    }
    else if (playerMove === scissors && computerMove === rock){
        console.log("You lose!");
    }
    else if (playerMove === paper && computerMove === rock){
        console.log("You win!");
    }
    else if (playerMove === rock && computerMove === paper) {
        console.log("You lose!");
    }
    else if (playerMove === scissors && computerMove === paper){
        console.log("You win!");
    }
    else if (playerMove === paper && computerMove === scissors){
        console.log("You lose!");
    }
    else {
        console.log("Tie. Go again")
    }
    return winner;
};

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ( playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove;
        var computerMove = getComputerMove;
        var winner = (getPlayerMove, getComputerMove); 
        if (winner == playerMove){
            console.log("Computer picks " + getComputerMove);
        }
        else if (winner = computerMove) {
            console.log("Computer picks " + getComputerMove);
        }
    }
    return [playerWins, computerWins];
}

