
// 4 Rock, Paper, Scissors
{ // Code up to e)

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay(){
    let choice = randomNumber(1,4);
    if (choice == 1)
        return "ROCK";
    else if (choice == 2)
        return "PAPER";
    else 
        return "SCISSORS";
}

function singleRound(playerSelection, computerSelection){
    if (playerSelection == undefined)
        playerSelection = prompt("Pick your item!");
    if (computerSelection == undefined)
        computerSelection = computerPlay();
    
    switch(playerSelection.toUpperCase()){
        case "ROCK":
            if (computerSelection == "ROCK")
                return "Draw! Play again.";
            else if (computerSelection == "PAPER")
                return "You lose! Paper beats rock.";
            else 
                return "You win! Rock beats scissors.";
        
        case "PAPER":
            if (computerSelection == "PAPER")
                return "Draw! Play again.";
            else if (computerSelection == "ROCK")
                return "You win! Paper beats rock.";
            else 
                return "You lose! Scissors beat paper.";
        
        case "SCISSORS":
            if (computerSelection == "SCISSORS")
                return "Draw! Play again.";
            else if (computerSelection == "ROCK")
                return "You lose! Rock beats scissors";
            else 
                return "You win! Scissors beat paper.";
        default:
            alert("Enter a valid item! Available choices are:\n a) Rock \n b) Paper \n c) Scissors");
            return singleRound()
    }
}

}
// Code after e)
function playRound(playerSelection=undefined, computerSelection=undefined){
    if (playerSelection == undefined)
        playerSelection = prompt("Pick your item!");
    if (computerSelection == undefined)
        computerSelection = computerPlay();
    
    switch(playerSelection.toUpperCase()){
        case "ROCK":
            if (computerSelection == "ROCK")
                return "D";
            else if (computerSelection == "PAPER")
                return "L";
            else 
                return "W";
        
        case "PAPER":
            if (computerSelection == "PAPER")
                return "D";
            else if (computerSelection == "ROCK")
                return "W";
            else 
                return "L";
        
        case "SCISSORS":
            if (computerSelection == "SCISSORS")
                return "D";
            else if (computerSelection == "ROCK")
                return "W";
            else 
                return "L";
        default:
            alert("Enter a valid item! Available choices are:\n a) Rock \n b) Paper \n c) Scissors");
            return playRound()
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let winner = undefined;

    for (let i=0; i<5; i++){
        let result = playRound();

        if (result == "W"){
            console.log("You win!");
            playerPoints += 1;}
        else if (result == "L"){
            console.log("You lose!");
            computerPoints += 1;}
        else {
            console.log("Draw!");
            continue;}
    }

    if (playerPoints == computerPoints)
        winner = "nobody";
    else if (playerPoints > computerPoints)
        winner = "player 1";
    else 
        winner = "computer";
    
    return `The winner of the game is ${winner} and the score is ${playerPoints}:${computerPoints}`
}