// first interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("please enter rock,paper, or scissors.");
    if (playerChioce) {
        //Then we continue to play⚡☣⚡
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            //Then we continue with the game logic

            let computerChioce = Math.floor(Math.random() * 3 + 1);

        } else {
            alert ("you didn't enter rock, paper, or scissore.");
        }
    } else {
        alert("i guess you changed your mind");
    }
} else{
    alert("okay, maybe next time.");
}