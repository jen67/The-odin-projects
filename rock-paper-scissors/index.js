let playerScore = 0;
let computerScore = 0;
let winner; // Declare winner as a global variable

function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  return computerOptions[computerNumber];
}

function playRound(playerChoice, computerChoice) {
  winner = document.querySelector(".results"); // Assign winner within playRound

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

    playOptions.forEach((option) => {
      option.addEventListener("click", function () {
        if (playerScore < 5 && computerScore < 5) {
          const computerChoice = getComputerChoice();

          // compare hands
          playRound(this.textContent, computerChoice);

          // update images
          playerHand.src = `./images/${this.textContent}.svg`;
          computerHand.src = `./images/${computerChoice}.svg`;

          // update scores directly
          document.querySelector("#pscore").textContent = playerScore;
          document.querySelector("#cscore").textContent = computerScore;
        }

        // Check for game end
        if (playerScore === 5 || computerScore === 5) {
          displayFinalResult();
          // Remove event listeners to prevent further clicks
          playOptions.forEach((option) => option.removeEventListener("click"));
        }
      });
    });
  }

  playOptions();
}

// Call the game function to start the game
game();
