const body = document.querySelector("body");
const themeContainer = document.querySelector(".theme-toggler");
const darkThemeToggler = document.querySelector(".dark-toggle");
const lightThemeToggler = document.querySelector(".light-toggle");
const gameRules = document.querySelector(".about-game button");
const gameContainer = document.querySelector(".game-container");
const gameRulesContainer = document.querySelector(".about-game-modal");
const closeBtn = document.querySelector(".close");

// Load the theme preference from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeToggleDisplay();
  }
});

// Function to update the display of theme toggles
function updateThemeToggleDisplay() {
  darkThemeToggler.style.display = body.classList.contains("dark-mode")
    ? "none"
    : "block";
  lightThemeToggler.style.display = body.classList.contains("dark-mode")
    ? "block"
    : "none";
}

// Function to toggle the theme
function toggleTheme() {
  body.classList.toggle("dark-mode");
  updateThemeToggleDisplay();

  // Save the current theme preference to localStorage
  const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";
  localStorage.setItem("theme", currentTheme);
}

// Event listeners
themeContainer.addEventListener("click", toggleTheme);

gameRules.addEventListener("click", () => {
  gameContainer.style.display = "none";
  gameRulesContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  gameRulesContainer.style.display = "none";
  gameContainer.style.display = "block";
});
