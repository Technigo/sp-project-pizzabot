// Start here
// Here I will try to replace the if else statement with switch case structure 
// Step 1 - Welcome and introduction
// Here is just and alert with the welcome message and then I ask for the name using a prompt.
alert(
    `Welcome to the Chaos Pizzeria.\nReady to Order? - Click 'OK' to begin.`
)
let name = prompt('Please enter your name here', '')

alert(
    `Hi ${name}. Are you hungry?`
)

// Step 2 - Food choice
// I need to get the over all food choice. 
let foodChoice = prompt('What would you like to order? (enter a number) \n1 - Pizza\n2 - Pasta\n3 - Desert', '')

const foodAvailable = ['Pizza', 'Pasta', 'Desert']

alert(
    `Yay! You chose ${foodAvailable[Number(foodChoice) - 1]}!`
)
const foodCategory = foodAvailable[Number(foodChoice) - 1]


// Step 3 - Subtype choice
const pizzaChoice = ['Magherita', 'Parma', 'Vegeteriano', 'Bufalata']
const pastaChoice = ['Ravioli', 'Spaghetti alla Carbonara', 'Linguine', 'Chef choice']
const desertChoice = ['Tiramisu', 'Gelato', 'Panna cotta', 'Chocolate fondant']
// to be able to access the final choice in the end I need to declare the variable outside the if statement 
let finalChoice = ''
let subFood = ''
// Here I replace is with the switch case

switch (foodCategory) {
    case 'Pizza':
        subFood = prompt('Select a Pizza type (enter a number): \n1 - Magherita\n2 - Parma\n3 - Vegeteriano\n4 - Bufalata', '')

        alert(
            `You chose ${pizzaChoice[Number(subFood) - 1]}!`
        )

        finalChoice = pizzaChoice[Number(subFood) - 1]
        break
    case 'Pasta':
        subFood = prompt('Select a Pasta type (enter a number): \n1 - Ravioli\n2 - Spaghetti alla Carbonara\n3 - Linguine\n4 - Chef choice', '')

        alert(
            `You chose ${pastaChoice[Number(subFood) - 1]}!`
        )
        finalChoice = pastaChoice[Number(subFood) - 1]
        break
    case 'Desert':
        subFood = prompt('Select a Desert type (enter a number): \n1 - Tiramisu\n2 - Gelato\n3 - Panna cotta\n4 - Chocolate fondant', '')

        alert(
            `You chose ${desertChoice[Number(subFood) - 1]}!`
        )
        finalChoice = desertChoice[Number(subFood) - 1]
        break
}


// Step 4 - Age
// Your code goes here
let age = prompt('One last thing! Is this food for a child or an adult? Please enter your age!', '')


// Step 5 - Order confirmation
// Your code goes here
let confirmation = ''
if (Number(age) >= 18) {
    confirmation = prompt(
        `One adult size ${finalChoice} will be prepared. That will be €10. Are you sure you want to order this? \n 1- Yes \n 2- No`
    )
} else {
    confirmation = prompt(
        `One child size ${finalChoice} will be prepared. That will be €10. Are you sure you want to order this? \n 1- Yes \n 2- No`
    )
}

if (confirmation === '1') {
    alert(
        'Thank you for your order! It will be ready in a minute. See you again soon!'
    )
} else {
    alert(
        'Oh! I guess something went wrong reload the page and try again!'
    )
}


