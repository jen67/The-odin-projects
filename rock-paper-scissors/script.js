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

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        playOptions.forEach((option) => { 
            option.addEventListener("click", function () { 

                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
            });
        });
        
        
    };

    const compareMatch = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".result h2");
        if (computerChoice === playerChoice) {
            winner.textContent = "It's a tie";
            return;
        }
    }

    playOptions(); 


};
game(); 
