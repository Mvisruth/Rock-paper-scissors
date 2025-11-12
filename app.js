let userScore = 0;
let computerScore = 0;

const drawGame = ()=>{
  console.log("Game was Draw");
}

const showWinner = (userWin)=>{
  if(userWin){
    console.log("you win");
  }else{
    console.log("computer win");
    
  }
}

const choices = document.querySelectorAll(".choice");
//Computer Choice
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * options.length);
  // console.log(options[random]);

  return options[random];
};

const playGame = (userChoice) => {
  //user choice
  console.log("user Choice = ", userChoice);
  //Genrate Computer Choice
  const cmpChoice = genComputerChoice()
  console.log("computer Choice = ", cmpChoice);

  if(userChoice===cmpChoice){
    drawGame()
  }else{
    let userWin = true
    if(userChoice=="rock"){
      userWin = cmpChoice =="paper"?false:true
    }else if(userChoice=="paper"){
      userWin = cmpChoice =="scissors"?false:true
    }else{
      userWin = cmpChoice =="rock"?false:true
    }
    showWinner(userWin)
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //Get the id value of this element and store it in the variable choiceId
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
