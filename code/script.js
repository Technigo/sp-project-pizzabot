// Step 1 - Welcome and introduction
alert(`Welcome to Joyce's Pizzeria! Ready to order? - Click 'OK' to begin.`)

let userName = prompt(`What is your name?`)

alert(`Hi, ${userName}! We're so happy you've joined us today!`)

// Step 2 - Food choice
let userSelection = prompt(`What would you like to order?
  Please select a number: 
    1 - Pizza
    2 - Pasta
    3 - Salad`)

let isValid = false

while (!isValid) {
  if (userSelection == 1) {
    foodType = "Pizza"
    alert(`You have selected ${foodType}.`)
    isValid = true;
  } else if (userSelection == 2) {
    foodType = "Pasta"
    alert(`You have selected ${foodType}.`)
    isValid = true;
  } else if (userSelection == 3) {
    foodType = "Salad"
    alert(`You have selected ${foodType}.`)
    isValid = true;
  } else {
    userSelection = prompt(`${userSelection} is not a valid option. Please enter a number between 1 and 3 to select one of the following options:
      1 - Pizza
      2 - Pasta
      3 - Salad`)
  }
}

// Step 3 - Subtype choice
let foodOrder = ""

if (foodType === "Pizza") {
  let isPizzaValid = false;
  let pizzaSubtype = prompt(`What toppings would you like on your pizza?
    Please select a number: 
      1 - Pepporoni
      2 - Cheese
      3 - Margherita`)
  while (!isPizzaValid) {
    // Loop to continuously prompt user until a valid selection is made
    if (pizzaSubtype == 1) {
      foodOrder = "Pepporoni Pizza"
      alert(`Great choice! You have selected ${foodOrder}!`)
      isPizzaValid = true
    } else if (pizzaSubtype == 2) {
      foodOrder = "Cheese Pizza"
      alert(`Excellent choice! You have chosen ${foodOrder}!`)
      isPizzaValid = true
    } else if (pizzaSubtype == 3) {
      foodOrder = "Margherita Pizza"
      alert(`Yum! You have chosen ${foodOrder}!`)
      isPizzaValid = true
    } else {
      pizzaSubtype = prompt(`${pizzaSubtype} is not a valid selection. 
        Please choose a number from the following pizza options:
          1 - Pepporoni
          2 - Cheese 
          3 - Margherita`)
    }
  }
} else if (foodType === "Pasta") {
  let isPastaValid = false
  let pastaSubtype = prompt(`What kind of pasta would you like?
    Please select a number:
      1 - Spaghetti Bolognese
      2 - Fettucine Alfredo
      3 - Lasagna`)
  while (!isPastaValid) {
    if (pastaSubtype == 1) {
      foodOrder = "Spaghetti Bolognese"
      alert(`That's one of our favorites! You have chosen ${foodOrder}!`)
      isPastaValid = true
    } else if (pastaSubtype == 2) {
      foodOrder = "Fettucine Alfredo"
      alert(`Wonderful choice! You have chosen ${foodOrder}!`)
      isPastaValid = true
    } else if (pastaSubtype == 3) {
      foodOrder = "Lasagna"
      alert(`A brilliant selection! You have chosen ${foodOrder}!`)
      isPastaValid = true
    } else {
      pastaSubtype = prompt(`${pastaSubtype} is not a valid selection.
        Please choose a number from the following pasta options:
          1 - Spaghetti Bolognese
          2 - Fettucine Alfredo
          3 - Lasagna`)
    }
  }
} else if (foodType === "Salad") {
  let isSaladValid = false
  let saladSubtype = prompt(`What kind of salad would you like?
    Please select a number:
      1 - Caesar Salad
      2 - Greek Salad
      3 - Caprese Salad`)
  while (!isSaladValid) {
    if (saladSubtype == 1) {
      foodOrder = "Caesar Salad"
      alert(`Good call! You have chosen ${foodOrder}!`)
      isSaladValid = true
    } else if (saladSubtype == 2) {
      foodOrder = "Greek Salad"
      alert(`Awesome choice! You have chosen ${foodOrder}!`)
      isSaladValid = true
    } else if (saladSubtype == 3) {
      foodOrder = "Caprese Salad"
      alert(`You're in for a treat! You have chosen ${foodOrder}!`)
      isSaladValid = true
    } else {
      saladSubtype = prompt(`${saladSubtype} is not a valid selection.
        Please choose a number from the following salad options:
          1 - Caesar Salad
          2 - Greek Salad
          3 - Caprese Salad`)
    }
  }
} else {
  alert(`Error. Please restart.`)
}

// Step 4 - Age
let userAge = prompt(`Will this order be for a child or adult? Please enter your age:`)
userAge = Number(userAge)

let confirmation = 0
let isValidAge = false

while (!isValidAge) {
  if (isNaN(userAge)) {
    userAge = prompt(`Please enter an age as a number:`)
  }
  else if (userAge >= 13) {
    confirmation = prompt(`One adult portion of ${foodOrder} costs $14.95. Enter a number to confirm:
      1 - Yes, please!
      2 - No, thank you.`)
    isValidAge = true
  } else if (userAge < 13) {
    confirmation = prompt(`One child portion of ${foodOrder} costs $8.95. Enter a number to confirm:
      1 - Yes, please!
      2 - No, thank you.`)
    isValidAge = true
  } else {
    alert(`Error. Please restart.`)
  }
}

// Step 5 - Order confirmation
let isConfirmationValid = false

while (isConfirmationValid == false) {
  if (confirmation == 1) {
    alert(`Thank you, ${userName}! Your order is confirmed and your food is on the way.`)
    isConfirmationValid = true
  } else if (confirmation == 2) {
    alert(`You have declined the order. If you change your mind, please come back and order again! Bye for now, ${userName}!`)
    isConfirmationValid = true
  } else {
    confirmation = prompt(`${confirmation} is an invalid option. Please enter 1 or 2 to confirm:
      1 - Yes, please!
      2 - No, thank you.`)
  }
}