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
let foodType = ''

while (!isValid) {
  switch (userSelection) {
    case '1':
      // Case for Pizza
      foodType = "Pizza"
      alert(`You have selected ${foodType}.`)
      isValid = true
      break
    case '2':
      // Case for Pasta
      foodType = "Pasta"
      alert(`You have selected ${foodType}.`)
      isValid = true
      break
    case '3':
      // Case for Salad
      foodType = "Salad"
      alert(`You have selected ${foodType}.`)
      isValid = true
      break
    default:
      // Default case for invalid selection
      userSelection = prompt(
        `${userSelection} is not a valid Option. Please enter a number between 1 and 3 to select one of the following options:
          1 - Pizza
          2 - Pasta
          3 - Salad`
      )
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
    switch (pizzaSubtype) {
      case '1':
        // Case for Pepporoni Pizza
        foodOrder = "Pepporoni Pizza"
        alert(`Great choice! You have selected ${foodOrder}`)
        isPizzaValid = true
        break
      case '2':
        // Case for Cheese Pizza
        foodOrder = "Cheese Pizza"
        alert(`Excellent choice! You have selected ${foodOrder}`)
        isPizzaValid = true
        break
      case '3':
        // Case for Margherita Pizza
        foodOrder = "Margherita Pizza"
        alert(`Yum! You have selected ${foodOrder}`)
        isPizzaValid = true
        break
      default:
        // Default case for invalid selection
        pizzaSubtype = prompt(
          `${pizzaSubtype} is not a valid selection. Please choose a number from the following pizza options:
            1 - Pepporoni
            2 - Cheese
            3 - Margherita`
        )
        break
    }
  }
} else if (foodType === "Pasta") {
  let isPastaValid = false;
  let pastaSubtype = prompt(`What kind of pasta would you like?
    Please select a number:
      1 - Spaghetti Bolognese
      2 - Fettucine Alfredo
      3 - Lasagna`)
  while (!isPastaValid) {
    switch (pastaSubtype) {
      case '1':
        // Case for Spaghetti Bolognese
        foodOrder = "Spaghetti Bolognese"
        alert(`That's one of our favorites! You have chosen ${foodOrder}`)
        isPastaValid = true
        break
      case '2':
        // Case for Fettucine Alfredo
        foodOrder = "Fettucine Alfredo"
        alert(`Wonderful choice! You have chosen ${foodOrder}`)
        isPastaValid = true
        break
      case '3':
        // Case for Lasagna
        foodOrder = "Lasagna"
        alert(`A brilliant selection! You have chosen ${foodOrder}`)
        isPastaValid = true
        break
      default:
        // Default case for invalid selection
        pastaSubtype = prompt(
          `${pastaSubtype} is not a valid selection. Please choose a number from the following pasta options:
            1 - Spaghetti Bolognese
            2 - Fettucine Alfredo
            3 - Lasagna`
        )
        break
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
    switch (saladSubtype) {
      case '1':
        // Case for Caesar Salad
        foodOrder = "Caesar Salad"
        alert(`Good call! You have chosen ${foodOrder}!`)
        isSaladValid = true
        break
      case '2':
        // Case for Greek Salad
        foodOrder = "Greek Salad"
        alert(`Awesome choice! You have chosen ${foodOrder}!`)
        isSaladValid = true
        break
      case '3':
        // Case for Caprese Salad
        foodOrder = "Caprese Salad"
        alert(`You're in for a treat! You have chosen ${foodOrder}`)
        isSaladValid = true
        break
      default:
        // Default case for invalid selection
        saladSubtype = prompt(
          `${saladSubtype} is not a valid selection. Please choose a number from the following salad options:
            1 - Caesar Salad
            2 - Greek Salad
            3 - Caprese Salad`)
        break
    }
  }
}

// Step 4 - Age
let userAge = prompt(`Will this order be for a child or adult? Please enter your age:`)
userAge = Number(userAge);

let confirmation = 0;
let portionSize = userAge > 12 ? "adult" : "child"

switch (foodType) {
  case "Pizza":
  case "Pasta":
  case "Salad":
    confirmation = prompt(`One ${portionSize} portion of ${foodOrder}coming right up!
      Enter a number to confirm:
        1 - Yes, please!
        2 - No, thank you.`)
    break
  default:
    alert(`Error. Please restart the ordering process.`)
}

