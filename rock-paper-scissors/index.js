let playerScore = 0;
let computerScore = 0;
let winner;

function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  return computerOptions[computerNumber];
}

function playRound(playerChoice, computerChoice) {
  winner = document.querySelector(".results");

  if (playerChoice === computerChoice) {
    winner.textContent = "It's a tie";
  } else {
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
  function handleOptionClick() {
    if (playerScore < 5 && computerScore < 5) {
      const computerChoice = getComputerChoice();

      // compare hands
      playRound(this.textContent, computerChoice);

      // update images
      document.querySelector(
        ".playerhand"
      ).src = `./images/${this.textContent}.svg`;
      document.querySelector(
        ".computerhand"
      ).src = `./images/${computerChoice}.svg`;

      // update scores directly
      document.querySelector("#pscore").textContent = playerScore;
      document.querySelector("#cscore").textContent = computerScore;
    }

    // Check for game end
    if (playerScore === 5 || computerScore === 5) {
      // Remove event listeners to prevent further clicks
      document.querySelectorAll(".choices button").forEach((option) => {
        option.removeEventListener("click", handleOptionClick);
      });
    }
  }

  // Add event listeners
  document.querySelectorAll(".choices button").forEach((option) => {
    option.addEventListener("click", handleOptionClick);
  });
}

// Call the game function to start the game
game();
