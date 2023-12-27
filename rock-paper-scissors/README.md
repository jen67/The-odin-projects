# Rock, Paper, Scissors Game

This is one of the projects given in the-odin-foundation projects

## Live Demo

Visit the live demo [here](https://the-odin-projects.vercel.app/)

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
Initialize game variables:
  playerScore = 0
  computerScore = 0
  winner = undefined

Function getComputerChoice():
  computerOptions = ["rock", "paper", "scissors"]
  computerNumber = Random number between 0 and 2
  return computerOptions[computerNumber]

Function playRound(playerChoice, computerChoice):
  winner = Document element with class "final-results"

  If playerChoice is equal to computerChoice:
    Display a tie message in the result element
    Set the winner text content to "It's a tie"
  Else if playerChoice beats computerChoice:
    Display a winning message in the result element
    Set the winner text content to "You win! 🎉"
    Increment playerScore
  Else:
    Display a losing message in the result element
    Set the winner text content to "You lose! 😞"
    Increment computerScore

  Log the current player and computer scores

Function handleOptionClick():
  If playerScore is less than 5 and computerScore is less than 5:
    playerChoice = Convert clicked button text content to lowercase
    computerChoice = getComputerChoice()

    Call playRound function with playerChoice and computerChoice

    Update player and computer hand images
    Update player and computer scores in the DOM

  Check for game end:
    If playerScore is equal to 5 or computerScore is equal to 5:
      Remove event listeners from all choice buttons
      Display the winner modal
      Set the winnerText content to the winners message
      Display the final score in the modal

Function game():
  Add event listeners to all choice buttons
  Set the initial display state of winnerModal to "none"

Function playAgain():
  Hide the winner modal
  Reset scores and text content
  Set winner text content to "Make your choice"
  Set result text content to "The first to score 5 points wins the game"
  Reset playerScore and computerScore to 0
  Reset player and computer hand images to the initial state
  Reattach event listeners to all choice buttons

Add event listener for "Play Again" button:
  Call playAgain function when the button is clicked

Call the game function to start the game

```
