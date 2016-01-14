var userName = prompt("Hello there! What's your name?");
alert("Hello, " + userName + ", very nice to meet you! Let's play a game to break the ice.");
console.log("This is the userName variable: " + userName);
var finalScore = 0; //note: I worked with Nassir and David to arrive at the counter solution.

//Guessing-Game Question 1: Am I from South Dakota?

var myHometown = prompt("Please guess yes or no: Am I from South Dakota?");
console.log("This is the myHometown variable: " + myHometown);

if (myHometown === "yes" || myHometown === "Yes" || myHometown === "Y" || myHometown === "y" || myHometown === "YES") {
  alert("Yup, " + userName + ", I am from South Dakota!");
  finalScore++;
  console.log("The user provided the correct repsonse.");
} else if (myHometown === "no" || myHometown === "No" || myHometown === "N" || myHometown === "n" || myHometown === "NO") {
  alert("Sorry, " + userName + ", wrong answer. I am from South Dakota!");
  console.log("The user provided the incorrect repsonse.");
} else {
  alert("Oops, " + userName + ", unrecognizable response. For the record, I am from South Dakota!");
  console.log("The user provided an unrecognized response.");
}

//Guessing-Game Question 2: Do I believe in ghosts?

var myGhost = prompt("Do I believe in ghosts?");
console.log("This is the myGhost variable: " + myGhost);

if (myGhost === "yes" || myGhost === "Yes" || myGhost === "Y" || myGhost === "y" || myGhost === "YES") {
  alert("Boo! You're correct, " + userName + ", I absolutelty believe in ghosts!");
  finalScore++;
  console.log("The user provided the correct repsonse.");
} else if ((myGhost === "no" || myGhost === "No" || myGhost === "N" || myGhost === "n" || myGhost === "NO")) {
  alert("Sorry, " + userName + ", wrong answer. Of course I believe in ghosts! Don't you?");
  console.log("The user provided the incorrect repsonse.");
} else {
  alert("Oops, " + userName + ", unrecognizable response. For the record, I do believe in ghosts!");
  console.log("The user provided an unrecognized response.");
}

//Guessing-Game Question 3: Do I moonlight as a jazz musician?

var myMoonlight = prompt("Do you think I moonlight as a jazz musician?");
console.log("This is the myMoonlight variable: " + myMoonlight);

if (myMoonlight === "yes" || myMoonlight === "Yes" || myMoonlight === "Y" || myMoonlight === "y" || myMoonlight === "YES") {
  alert("Oh, " + userName + ", I am flattered you think I'm that cool! No, I do not moonlight as a jazz musician, but I wish I did.");
  console.log("The user provided the incorrect response.");
} else if (myMoonlight === "no" || myMoonlight === "No" || myMoonlight === "N" || myMoonlight === "n" || myMoonlight === "NO") {
  alert("You're right, " + userName + ", I do not moonlight as a jazz musician, but I wish I did!");
  finalScore++;
  console.log("The user provided the correct repsonse.");
} else {
  alert("Oops, " + userName + ", unrecognizable response. For the record, I do not moonlight as a jazz musician, but I wish I did.");
  console.log("The user provided an unrecognized response.");
}

//Final Score Counter
alert("Thanks for answering my ice breakers! You scored " + finalScore + " out of 3 correctly.")

//Guessing-Game Stretch Question 1: Guess my number!

var userNum = prompt("Okay, next question: Please guess a number between 1 and 10.");
console.log("This is the userNum variable: " + userNum);
userNum = Number(userNum);
var myNum = 2;

if (userNum === myNum) {
  alert("Great work, " + userName + "! The correct number was 2.");
  console.log("The user provided the correct response.");
} else if (userNum < myNum) {
  alert("Sorry, " + userName + ", you guessed too low.");
  console.log("The user guessed too low.");
} else if (userNum > myNum) {
  alert("Sorry, " + userName + ", you guessed too high.");
  console.log("The user guessed too high.");
} else {
  alert("Oops, " + userName + ", unrecognizable response. For the record, the correct answer is 2.");
  console.log("The user provided an unrecognized response.");
}

//Guessing-Game Stretch Question 2: Guess my number again!

var userNumTwo = prompt("Now that you're warmed up, how about guessing another number between 1 and 10.");
console.log("This is the userNumTwo: " + userNumTwo);
var userNumTwo = Number(userNumTwo);
var myNumTwo = 4;

while (userNumTwo != myNumTwo) {
  if (userNumTwo < myNumTwo) {
    userNumTwo = Number(prompt("Sorry, " + userName + ", you guessed too low. Try again!"));
  } else if (userNumTwo > myNumTwo) {
    userNumTwo = Number(prompt("Sorry, " + userName + ", you guessed too high. Try again!"));
  }
}

alert("Well done! You guessed the correct number!!");
alert("Thanks for stopping by, " + userName + ", and thanks for playing. Goodbye!");
