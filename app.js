let userScore = 0;
let computerScore = 0;

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
  score(userChoice,cmpChoice)
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //Get the id value of this element and store it in the variable choiceId
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
