// first interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("please enter rock,paper, or scissors.");
  if (playerChoice) {
    //Then we continue to play⚡☣⚡
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      //Then we continue with the game logic

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1 ? "rock" : computer === 2 ? "paper" : "scissors";
      //When user selects then we run the game logic
      //using Ternary Operator
      //syntax
      // condition ? ifTrue : ifFalse;
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins: playerOne: ${playerOne}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("play Again?");
      playAgain ? location.reload() : alert("ok, thanks for playing");
    } else {
      alert("you didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("i guess you changed your mind");
  }
} else {
  alert("okay, maybe next time.");
}
