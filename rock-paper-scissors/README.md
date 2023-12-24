# Rock, Paper, Scissors Game

This is one of the projects given in the-odin-foundation projects

## Algorithm

```plaintext

Steps in the Rock, Paper, Scissors game:

1. Display a welcome message to the user.
2. Repeat the following steps until the user chooses to exit:
    a. Prompt the user to enter their choice (Rock, Paper, Scissors).
    b. Validate the user's input to ensure it is a valid choice.
    c. Generate a random number between 1 and 3 to represent the computer's choice:
        - If the number is 1, the computer chooses Rock.
        - If the number is 2, the computer chooses Paper.
        - If the number is 3, the computer chooses Scissors.
    d. Display the user's choice and the computer's choice.
    e. Determine the winner based on the rules:
        - If the user's choice equals the computer's choice, it's a tie.
        - If the user's choice defeats the computer's choice, the user wins.
        - If the computer's choice defeats the user's choice, the computer wins.
    f. Display the result of the round to the user.
3. Display a goodbye message to the user.

```

## Pseudocode

```javaScript
function getUserChoice() {
    // Prompt the user to enter their choice (Rock, Paper, or Scissors)
    // Validate the input to ensure it is a valid choice
    // Return the user's choice
}

function getComputerChoice() {
    // Generate a random number (1, 2, or 3) to represent Rock, Paper, or Scissors
    // Assign Rock, Paper, or Scissors based on the generated number
    // Return the computer's choice
}

function playRound(playerSelection, computerSelection) {
    // Compare PlayerSelection and computerSelection to determine the winner
    // Display the result to the user

    // Check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie! Replay the round.";
    }

}

function playGame() {
    userChoice = getUserChoice()
    computerChoice = getComputerChoice()
    playRound(userChoice, computerChoice) 
}

// Call the playGame function to start the game
playGame()
```
