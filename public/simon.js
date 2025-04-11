// Initialize arrays to hold the game sequence and user sequence
let gameSeq = [];
let userSeq = [];

// Define the available button colors
let btns = ["yellow", "red", "purple", "green"];

// Game state variables
let started = false; // Indicates if the game has started
let level = 0; // Current level of the game
let highScore = 0; // Variable to track the high score

// Select the header and create a new div for displaying the score
let h2 = document.querySelector("h2");
let scoreDisplay = document.createElement("div"); // Create a new div for displaying the score
document.body.appendChild(scoreDisplay); //  Append the score display to the body
scoreDisplay.style.fontSize = "24px"; // Style the score display

// Event listener for key press to start the game
document.addEventListener("keypress", function () {
  if (started == false) {
    // Check if the game has not started yet
    console.log("game is started");
    started = true; // Set the game state to started

    levelUp(); // Call levelUp to start the first level
  }
});
