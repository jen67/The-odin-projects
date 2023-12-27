const body = document.querySelector("body");
const themeContainer = document.querySelector(".theme-toggler");
const darkThemeToggler = document.querySelector(".dark-toggle");
const lightThemeToggler = document.querySelector(".light-toggle");
const gameRules = document.querySelector(".about-game button");
const gameContainer = document.querySelector(".game-container");
const gameRulesContainer = document.querySelector(".about-game-modal");
const closeBtn = document.querySelector(".close");

// handles the game rules modal
gameRules.addEventListener("click", () => {
  gameRulesContainer.style.display = "block";
  gameContainer.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  gameRulesContainer.style.display = "none";
  gameContainer.style.display = "block";
});

themeContainer.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  darkThemeToggler.style.display = body.classList.contains("dark-mode")
    ? "none"
    : "block";
  lightThemeToggler.style.display = body.classList.contains("dark-mode")
    ? "block"
    : "none";
});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  return computerOptions[computerNumber];
}

function playRound(playerChoice, computerChoice) {
  const winner = document.querySelector(".results");

  if (playerChoice === computerChoice) {
    winner.textContent = "It's a tie";
  } else {
      
    // checking for rock, paper, and scissors
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      winner.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      playerScore++;
    } else {
      winner.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      computerScore++;
    }

    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
  }
}

function game() {
  function playOptions() {
    const playOptions = document.querySelectorAll(".choices button");
    const playerHand = document.querySelector(".playerhand");
    const computerHand = document.querySelector(".computerhand");
    // const player = document.querySelector("#pscore");
    // const computer = document.querySelector("#cscore");

    playOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const computerChoice = getComputerChoice();

        // compare hands
        playRound(this.textContent, computerChoice);

        // update images
        playerHand.src = `./images/${this.textContent}.svg`;
        computerHand.src = `./images/${computerChoice}.svg`;

        // update scores directly
        document.querySelector("#pscore").textContent = playerScore;
        document.querySelector("#cscore").textContent = computerScore;

        // update winner message
        document.querySelector(".results").textContent = winner.textContent;
      });
    });
  }

  playOptions();
}

// Call the game function to start the game
game();
