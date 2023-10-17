// Initialize a variable to track if the "=" button was pressed
let equalPressed = 0;

// Select all buttons with the "input-button" class (excluding AC and DEL)
let inputButtons = document.querySelectorAll(".input-button");

// Select input, equal, clear, and erase elements
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// Execute code when the window is loaded
window.onload = () => {
    // Clear the input field when the page loads
    input.value = "";
};

// Add event listeners to each button with the "input-button" class
inputButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Check if the "=" button was pressed before
        if (equalPressed === 1) {
            // Clear the input field if "=" was pressed previously
            input.value = "";
            equalPressed = 0; // Reset the flag
        }
        // Append the value of the clicked button to the input field
        input.value += button.value;
    });
});

// Calculate and display the result when the "=" button is clicked
equal.addEventListener("click", () => {
    equalPressed = 1; // Set the flag to indicate "=" was pressed
    let inputValue = input.value;
    try {
        // Evaluate the user's input as a mathematical expression
        let solution = eval(inputValue);
        // Check if the result is an integer or a decimal
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            // Display up to 2 decimal places for decimal results
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        // Handle invalid input by showing an alert
        alert("Invalid Input");
    }
});

// Clear the input when the "AC" (clear) button is clicked
clear.addEventListener("click", () => {
    input.value = "";
});

// Erase the last digit when the "DEL" (erase) button is clicked
erase.addEventListener("click", () => {
    // Remove the last character from the input field
    input.value = input.value.substr(0, input.value.length - 1);
});
