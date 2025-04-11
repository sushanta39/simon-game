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

// Function to check the user's answer
function checkAns(idx) {
    // Check if the user's input matches the game sequence
    if (userSeq[idx] === gameSeq[idx]) {
        // If the user has completed the sequence
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); // Move to the next level after a delay
        }
    } else {
        // If the user's input is incorrect, display game over message
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red"; // Change background color to red
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"; // Reset background color after 150ms
        }, 150);
        reset(); // Reset the game
    }
}


// Function to handle button press
function btnPress() {
    let btn = this; // Reference to the button that was pressed
    userFlash(btn); // Flash the button to indicate it was pressed

    userColor = btn.getAttribute("id"); // Get the color associated with the button
    userSeq.push(userColor); // Add the pressed color to the user's sequence

    checkAns(userSeq.length - 1); // Check the answer for the last pressed button
}

// Attach event listeners to all buttons for click events
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress); // Add click event listener to each button
}

// Function to reset the game state
function reset() {
    started = false; // Set game state to not started
    gameSeq = []; // Clear the game sequence
    userSeq = []; // Clear the user sequence
    level = 0;
    scoreDisplay.innerText = " "; // clear the score display on reset 
}




