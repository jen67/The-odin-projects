const body = document.querySelector("body");
const themeContainer = document.querySelector(".theme-toggler");
const darkThemeToggler = document.querySelector(".dark-toggle");
const lightThemeToggler = document.querySelector(".light-toggle")


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
}
