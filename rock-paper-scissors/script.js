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
    gameContainer.style.display = "none";
    gameRulesContainer.style.display = "block";
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

