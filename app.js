let userScore = 0;
let computerScore = 0;
let move = 0;

const msg = document.getElementById("msg");
// Match draw
const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw.Play again";
};
//show Winner 
const showWinner = (userWin) => {
  if (userWin) {
    msg.innerHTML = "you win";
    msg.style.background = "green";
    document.getElementById("user-score").innerText = userScore += 1;
    console.log("you win");
  } else {
    msg.innerHTML = "Computer win";
    msg.style.background = "red";
    document.getElementById("computer-score").innerText = computerScore += 1;
    console.log("computer win");
  }
};

const choices = document.querySelectorAll(".choice");
//Computer Choice
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * options.length);
  // console.log(options[random]);

  return options[random];
};
//game Over
const gameOver = () => {
  const choices = document.querySelectorAll(".choice");
  //Disable all choice
  choices.forEach((choice) => {
    choice.style.pointerEvents = "none";
    choice.style.opacity = "0.5";
  });
  // Display final result
  if (userScore > computerScore) {
    msg.innerText = "Game Over ! You Won The Game";
    msg.style.backgroundColor = "green";
  } else if (userScore < computerScore) {
    msg.innerText = "Game Over ! Computer Won The Game";
    msg.style.backgroundColor = "red";
  } else {
    msg.innerText = "Game Over! It's a Tie!";
    msg.style.backgroundColor = "orange";
  }
};

const playGame = (userChoice) => {
  //user choice
  console.log("user Choice = ", userChoice);
  //Genrate Computer Choice
  const cmpChoice = genComputerChoice();
  console.log("computer Choice = ", cmpChoice);
  //increment move
  move++;
  if (userChoice === cmpChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = cmpChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = cmpChoice == "scissors" ? false : true;
    } else {
      userWin = cmpChoice == "rock" ? false : true;
    }
    showWinner(userWin);
  }
  if (move >= 10) {
    gameOver();
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //Get the id value of this element and store it in the variable choiceId
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
