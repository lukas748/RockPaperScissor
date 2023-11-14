function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            guess = "Rock";
        break;
        case 1:
            guess = "Paper";
        break;
        case 2:
            guess = "Scissors";
        break;
    }

    return guess;
}

function getPlayerChoice(){
    const choice = prompt("Make your choice!");

    return choice;
}

function playRound(player,computer){

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if(player == computer){
        console.log("You chose " + player)
        console.log("Computer chose " + computer)
        console.log("Draw!")
    } else if((player == "rock" && computer == "paper")||(player == "paper" && computer == "scissors")||(player == "scissors" && computer == "rock")) {
        console.log("You chose " + player)
        console.log("Computer chose " + computer)
        console.log("You lost the Round!")
        return 0;
    } else if((computer == "rock" && player == "paper")||(computer == "paper" && player == "scissors")||(computer == "scissors" && player == "rock")) {
        console.log("You chose " + player)
        console.log("Computer chose " + computer)
        console.log("You won the Round!")
        return 1;
    } else {
        console.log("This item does not exist!")
    }
}

function game(){
    let pScore = 0;
    let cScore = 0;
    let i = 1;

    while (i < 100) {
        console.log("Round " + i + "!")
        player = getPlayerChoice();
        computer = getComputerChoice();
        result = playRound(player,computer)

        if (result == 0){
            cScore++;
            console.log("Computer: " + cScore)
        } else if(result == 1){
            pScore++;
            console.log("Player: " + pScore)
        }
        
        if ((pScore||cScore)==5){
            if(pScore == 5){
                console.log("Player won the game!")
            } else {
                console.log("Computer won the game")
            }
            break;
        }

        i++;
    }
}

game();