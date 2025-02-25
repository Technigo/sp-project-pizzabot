// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to the Chaos Pizzeria.\nReady to Order? - Click 'OK' to begin.`
)
let name = prompt('Please enter your name here', '')

alert(
  `Hi ${name}. Are you hungry?`
)

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt('What would you like to order? (enter a number) \n1 - Pizza\n2 - Pasta\n3 - Desert', '')

const foodAvailable = ['Pizza', 'Pasta', 'Desert']

alert(
  `Yay! You chose ${foodAvailable[Number(foodChoice) - 1]}!`
)


// Step 3 - Subtype choice
const pizzaChoice = ['Magherita', 'Parma', 'Vegeteriano', 'Bufalata']
const pastaChoice = ['Ravioli', 'Spaghetti alla Carbonara', 'Linguine', 'Chef choice']
const desertChoice = ['Tiramisu', 'Gelato', 'Panna cotta', 'Chocolate fondant']

// Your code goes here
if (foodChoice === '1') {
  let subFood = prompt('Select a Pizza type (enter a number): \n1 - Magherita\n2 - Parma\n3 - Vegeteriano\n4 - Bufalata', '')

  alert(
    `You chose ${pizzaChoice[Number(subFood) - 1]}!`
  )
} else if (foodChoice === '2') {
  let subFood = prompt('Select a Pasta type (enter a number): \n1 - Ravioli\n2 - Spaghetti alla Carbonara\n3 - Linguine\n4 - Chef choice', '')

  alert(
    `You chose ${pastaChoice[Number(subFood) - 1]}!`
  )
} else if (foodChoice === '3') {
  let subFood = prompt('Select a Desert type (enter a number): \n1 - Tiramisu\n2 - Gelato\n3 - Panna cotta\n4 - Chocolate fondant', '')

  alert(
    `You chose ${desertChoice[Number(subFood) - 1]}!`
  )
}



// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
