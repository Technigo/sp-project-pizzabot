// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria! Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt(
  `What is your name?`
)

alert(
  `Hi, ${userName}! We're so happy you've joined us today!`
)

// Step 2 - Food choice

let userSelection = prompt(
  `What would you like to order?
  Please select a number: 
    1 - Pizza
    2 - Pasta
    3 - Salad`
)

if (userSelection == 1) {
  foodChoice = "Pizza"
  alert(
    `You have selected ${foodChoice}.`
  )
}
else if (userSelection == 2) {
  foodChoice = "Pasta"
  alert(
    `You have selected ${foodChoice}.`
  )
}
else if (userSelection == 3) {
  foodChoice = "Salad"
  alert(
    `You have selected ${foodChoice}.`
  )
}
else {
  alert(
    `${userSelection} is not a valid option. Please enter a number between 1 and 3 to select one of the following options:
      1 - Pizza
      2 - Pasta
      3 - Salad`)
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
