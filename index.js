// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

// let saves = document.getElementById("save-btn")

function increment(){
    count+=1
    countEl.textContent = count
}

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let welcomeEl = document.getElementById=("welcome-el")
// let name = "Sarthak"
// let greeting ="Welcome back, " + name
// welcomeEl.innerText = welcomeEl.innerText + "👋"
// welcomeEl.innerText = greeting + name

// Variable

// Create a variable, message, that stores the string: "You have tree new notifications"

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Sarthak Shrestha"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints
// console.log(totalPoints)

// console.log(4+5)
// console.log("2" + "4")
// console.log("5" + 1)
// console.log(100+"100")


// let message = "You have three new notifications"
// let username = " one"

// console.log(message)

// // document.getElementById("count").innerText = 5

// // Create a variable, messageToUser, that contains the message we have logged

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// camelCase

// Grabbing the coun-el element in a countEl variable

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function increaseLaps(){
//     lapsCompleted = lapsCompleted + 1
// }

// increaseLaps()
// increaseLaps()
// increaseLaps()

// console.log(lapsCompleted)


// let lap1 = 33
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function addition(){
//     let sum = lap1+lap2+lap3
//     console.log(sum)
// }

// addition()


// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function logger(){
//     console.log("42")
// }

// logger()

// Pseudocode
// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Change the count-el in HTML to reflect the new count

//let count = 0

// function increment(){
//     console.log("the button was clicked")
// }

// Setting up a race JS

// function countdown(){
//     console.log("5")
//     console.log("4")
//     console.log("3")
//     console.log("2")
//     console.log("1")
// }

// Start race

// countdown()

// // Start another race

// countdown()


// document.getElementByID("count").innerText = 5

// let count = 5

// count + 1

// count = count + 1

// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
// let count = 0

// console.log(count)

// // Creating a variable myAge
// let myAge = 22

// // Logging the age to the console
// console.log(myAge)

// let firstBatch = 5
// let secondBatch = 10

// let count = firstBatch + secondBatch

// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 22
// let humanDogRatio = 7

// let myDogAge = 0

// myDogAge = myAge*humanDogRatio

// console.log(myDogAge)
