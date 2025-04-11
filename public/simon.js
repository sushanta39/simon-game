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

// Function to flash the game button
function gameFlash(btn) {
    btn.classList.add("flash");   // Add flash class to the button
    setTimeout(function () {
        btn.classList.remove("flash");  // Remove flash class after 100ms
    }, 100);
}

// Function to flash the user button when pressed
function userFlash(btn) {
    btn.classList.add("userflash");  // Add userflash class to the button
    setTimeout(function () {
        btn.classList.remove("userflash");  // Remove userflash class after 100ms
    }, 100);
}


// Function to handle level progression
function levelUp() {
    userSeq = []; // Reset user sequence for the new level
    level++;  // Increment the level
    h2.innerText = `level ${level}`; // Update the level display
    scoreDisplay.innerText = `score: ${level}`; // update the score display


    //check if the current level is a new high score 
    if (level > highScore) {
        highScore = level; // update high score
        scoreDisplay.innerText += ` (New High Score)`; // indicate a new high score
    }

    // Randomly select a button color for the game sequence
    let randIdx = Math.floor(Math.random() * 4);  // Generate a random index
    let randColor = btns[randIdx];  // Get the corresponding color
    let randBtn = document.querySelector(`.${randColor}`); // select the button element
    gameSeq.push(randColor); // Add the selected color to the game sequence
    console.log(gameSeq); // Log the game sequence for debugging
    gameFlash(randBtn); // Flash the selected button
}
