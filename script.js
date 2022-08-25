start();

function start() {
  console.log("start");
  getUserSelection();
}

function getUserSelection() {
  document.querySelector(".rock").addEventListener("click", chooseRock);
  document.querySelector(".paper").addEventListener("click", choosePaper);
  document.querySelector(".scissors").addEventListener("click", chooseScissors);
}

let userChoice;

function chooseRock() {
  userChoice = "rock";
  console.log("user " + userChoice);
  makeComputerChoice();
}

function choosePaper() {
  userChoice = "paper";
  console.log("user " + userChoice);
  makeComputerChoice();
}

function chooseScissors() {
  userChoice = "scissors";
  console.log("user " + userChoice);
  makeComputerChoice();
}

let computerChoice;

function makeComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  computerChoice = array[randomIndex];
  runAnimations();
  console.log("computer " + computerChoice);
}

function runAnimations() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", changePlayerPicture);
  document.querySelector("#player2").addEventListener("animationend", changeComputerPicture);
  setTimeout(getWinner, 2000);
}

function changePlayerPicture() {
  if (userChoice === "paper") {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice === "scissors") {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
  }
}

function changeComputerPicture() {
  if (computerChoice === "paper") {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
  } else if (computerChoice === "scissors") {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
  }
}

function getWinner() {
  if (userChoice === computerChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    document.querySelector("#lose").classList.remove("hidden");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    document.querySelector("#lose").classList.remove("hidden");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
