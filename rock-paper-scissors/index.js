const winnerModal = document.querySelector(".winner-modal");
const winnerText = document.querySelector(".winner-text");
const playAgainBtn = document.querySelector(".play-again");

let playerScore = 0;
let computerScore = 0;
let winner;

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    winnerModal.style.display = "none";
    document.querySelector("#pscore").textContent = playerScore;
    document.querySelector("#cscore").textContent = computerScore;
    document.querySelector(".playerhand").src = `./images/rock.svg`;
    document.querySelector(".computerhand").src = `./images/rock.svg`;
    game();
}

function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  return computerOptions[computerNumber];
}

function playRound(playerChoice, computerChoice) {
    winner = document.querySelector(".final-results");
    const result = document.querySelector("#results");

    if (playerChoice === computerChoice) {
      result.textContent = ` ${playerChoice} ties ${computerChoice}.`;
    winner.textContent = "It's a tie";
  } else {
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = ` ${playerChoice} beats ${computerChoice}.`;
      winner.textContent = `You win! 🎉`;
      playerScore++;
    } else {
        result.textContent = ` ${computerChoice} beats ${playerChoice}.`;
      winner.textContent = `You lose! 😞`;
      computerScore++;
    }

    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
  }
}

function game() {
  function handleOptionClick() {
      if (playerScore < 5 && computerScore < 5) {
        const playerChoice = this.textContent.toLowerCase();
      const computerChoice = getComputerChoice();

      // compare hands
      playRound(playerChoice, computerChoice);

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
          winnerModal.style.display = "block";
          winnerText.textContent = `${winner.textContent} Final Score: ${playerScore} - ${computerScore}`
          
      });
    }
  }

  // Add event listeners
  document.querySelectorAll(".choices button").forEach((option) => {
      option.addEventListener("click", handleOptionClick);
      winnerModal.style.display = "none";
  });
}

// Call the game function to start the game
game();
