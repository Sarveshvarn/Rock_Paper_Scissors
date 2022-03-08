const userDisplay = document.querySelector("#user-choice");
const computerDisplay = document.querySelector("#computer-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "Paper";
  }
  computerDisplay.innerHTML = computerChoice;
}

function getResult() {
  // Draw
  if (computerChoice === userChoice) {
    result = "Its a Draw!";
  }
  // Lose
  if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {
    result = "You Lost!";
  }
  // Win
  if (
    (computerChoice === "Rock" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Rock")
  ) {
    result = "You Win!";
  }

  resultDisplay.innerHTML = result;
}
