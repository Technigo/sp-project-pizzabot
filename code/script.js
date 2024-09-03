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

let isValid = false;

while (!isValid) {
  if (userSelection == 1) {
    foodType = "Pizza"
    alert(
      `You have selected ${foodType}.`
    )
    isValid = true;
  }
  else if (userSelection == 2) {
    foodType = "Pasta"
    alert(
      `You have selected ${foodType}.`
    )
    isValid = true;
  }
  else if (userSelection == 3) {
    foodType = "Salad"
    alert(
      `You have selected ${foodType}.`
    )
    isValid = true;
  }
  else {
    userSelection = prompt(
      `${userSelection} is not a valid option. Please enter a number between 1 and 3 to select one of the following options:
        1 - Pizza
        2 - Pasta
        3 - Salad`
    )
  }
}


// Step 3 - Subtype choice
// Your code goes here

if (foodType == "Pizza") {
  let isPizzaValid = false;
  let pizzaSubtype = prompt(
    `What toppings would you like on your pizza?
      Please select a number: 
      1 - Pepporoni
      2 - Cheese
      3 - Margherita`
  )
  while (!isPizzaValid) {
    if (pizzaSubtype == 1) {
      alert(
        `Great choice! You have selected Pepporoni Pizza!`
      )
      isPizzaValid = true;
    }
    else if (pizzaSubtype == 2) {
      alert(
        `Excellent choice! You have chosen Cheese Pizza!`
      )
      isPizzaValid = true;
    }
    else if (pizzaSubtype == 3) {
      alert(
        `Yum! You have chosen Margherita Pizza!`
      )
      isPizzaValid = true;
    }
    else {
      pizzaSubtype = prompt(
        `${pizzaSubtype} is not a valid selection. 
        Please choose a number from the following pizza options:
          1 - Pepporoni
          2 - Cheese 
          3 - Margherita`
      )
    }
  }
}
else if (foodType == "Pasta") {
  let isPastaValid = false;
  let pastaSubtype = prompt(
    `What kind of pasta would you like?
    Please select a number:
      1 - Spaghetti Bolognese
      2 - Fettucine Alfredo
      3 - Lasagna`
  )
  while (!isPastaValid) {
    if (pastaSubtype == 1) {
      alert(
        `That's one of our favorites! You have chosen Spaghetti Bolognese!`
      )
      isPastaValid = true;
    }
    else if (pastaSubtype == 2) {
      alert(
        `Wonderful choice! You have chosen Fettucine Alfredo!`
      )
      isPastaValid = true;
    }
    else if (pastaSubtype == 3) {
      alert(
        `A brilliant selection! You have chosen Lasagna!`
      )
      isPastaValid = true;
    }
    else {
      pastaSubtype = prompt(
        `${pastaSubtype} is not a valid selection.
        Please choose a number from the following pasta options:
          1 - Spaghetti Bolognese
          2 - Fettucine Alfredo
          3 - Lasagna`
      )
    }
  }
}
else if (foodType == "Salad") {
  let isSaladValid = false;
  let saladSubtype = prompt(
    `What kind of salad would you like?
    Please select a number:
      1 - Caesar Salad
      2 - Greek Salad
      3 - Caprese Salad`
  )
  while (!isSaladValid) {
    if (saladSubtype == 1) {
      alert(
        `Good call! You have chosen Caesar Salad!`
      )
      isSaladValid = true;
    }
    else if (saladSubtype == 2) {
      alert(
        `Awesome choice! You have chosen Greek Salad!`
      )
      isSaladValid = true;
    }
    else if (saladSubtype == 3) {
      alert(
        `You're in for a treat! You have chosen Caprese Salad!`
      )
      isSaladValid = true;
    }
    else {
      saladSubtype = prompt(
        `${saladSubtype} is not a valid selection.
        Please choose a number from the following salad options:
          1 - Caesar Salad
          2 - Greek Salad
          3 - Caprese Salad`
      )
    }
  }
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
