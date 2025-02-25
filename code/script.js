// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to the Chaos Pizzeria. Ready to Order? - Click 'OK' to begin.`
)
let name = prompt('Please enter your name here', '')

alert(
  `Hi ${name}. Are you hungry?`
)

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt('What would you like to order?\n1 - Pizza\n2 - Pasta\n3 - Desert', '')

if (foodChoice == 1) {
  alert('You chose Pizza!')
} else if (foodChoice == 2) {
  alert('You chose Pasta!')
} else if (foodChoice == 3) {
  alert('You chose Desert!')
} else {
  alert('Invalid input, please pick a number between 1 and 3.')
}


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
