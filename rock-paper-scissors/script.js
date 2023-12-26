const body = document.querySelector("body");
const themeContainer = document.querySelector(".theme-toggler");
const darkThemeToggler = document.querySelector(".dark-toggle");
const lightThemeToggler = document.querySelector(".light-toggle");
const gameRules = document.querySelector(".about-game button");
const gameContainer = document.querySelector(".game-container");
const gameRulesContainer = document.querySelector(".about-game-modal");
const closeBtn = document.querySelector(".close");

//handles the game rules modal
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
    darkThemeToggler.style.display = "block ";
    lightThemeToggler.style.display = "none";
    
    if (body.classList.contains("dark-mode")) {
        darkThemeToggler.style.display = "none";
        lightThemeToggler.style.display = "block"; 
    }
});

function game() {
  let playerScore = 0;
  let computerScore = 0;

  function playOptions() {
    const playOptions = document.querySelectorAll(".choices button");
    const playerHand = document.querySelector(".playerhand");
    const computerHand = document.querySelector(".computerhand");
    const player = document.querySelector("#pscore");
    const computer = document.querySelector("#cscore");
    const winner = document.querySelector(".results");

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    playOptions.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //compare hands
        compareMatch(this.textContent, computerChoice);

        //update images
        playerHand.src = `./images/${this.textContent}.svg`;
        computerHand.src = `./images/${computerChoice}.svg`;

        // update scores
        player.textContent = playerScore;
        computer.textContent = computerScore;
      });
    });
  }

  const compareMatch = (playerChoice, computerChoice) => {

    // checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
    } else {
      //checking for rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "You win";
          playerScore++;
        } else {
          winner.textContent = "Computer wins";
          computerScore++;
        }
      }

      // checking for paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer wins";
          computerScore++;
        } else {
          winner.textContent = "You win";
          playerScore++;
        }
      }

      //checking for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer wins";
          computerScore++;
        } else {
          winner.textContent = "You win";
          playerScore++;
        }
      }
    }
  };

  playOptions();
}

game();
