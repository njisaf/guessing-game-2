var userName = prompt("Hello there! What's your name?");
document.getElementById("greeting").innerHTML = "Hello, " + userName + ", very nice to meet you! Let's play a game to break the ice.";
console.log("This is the userName variable: " + userName);
var finalScore = 0; //note: I worked with Nassir and David to arrive at the counter solution.

var questions = ["Please guess yes or no: Am I from South Dakota?", "Do I believe in ghosts?", "Do you think I moonlight as a jazz musician?", "Okay, next question: Please guess a number between 1 and 10."];
var answers = ["yes", "yes", "no", 2];
var responses = ["I am from South Dakota!", "I do believe in ghosts! Don't you?", "I do not moonlight as a jazz musician.", ["You're correct!", "Too high!", "Too low!"]];
var ids = ["a1", "a2", "a3", "a4"];

function game(question, answer, response, id) { //Declaring a function named 'game' with 3 arguments: question, the question to ask. answer, the correct answer. response, the appropriate response, but when the answer is a number, the response is an array.
  var ques = prompt(question).toLowerCase(); //Calling prompt and passing question then converting the returned string to lower case, then assign the result to variable ques.
  if (answer === ques) {
    document.getElementById(id).innerHTML = "Good job! " + response;
    finalScore++;
  } else if (typeof answer === "number"){
    if (parseInt(ques) === answer) {
      document.getElementById(id).innerHTML = "Good job! " + response[0];
      finalScore++;
    } else if (parseInt(ques) > answer){
      document.getElementById(id).innerHTML = "Sad trombone: " + response[1];
    } else {
      document.getElementById(id).innerHTML = "Sad trombone: " + response[2];
    }
  } else {
    document.getElementById(id).innerHTML = "Sad trombone: " + response;
  }
}

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i], responses[i], ids[i]);
}

document.getElementById("finalScore").innerHTML = "Thanks for answering my ice breakers! You scored " + finalScore + " out of 4 correctly."

//Guessing-Game Stretch Question Class-03: Guess my number again!

// var userNumTwo = prompt("Now that you're warmed up, how about guessing another number between 1 and 10.");
// console.log("This is the userNumTwo: " + userNumTwo);
// userNumTwo = parseInt(userNumTwo);
// var myNumTwo = 4;
//
// while (userNumTwo !== myNumTwo) {
//   if (userNumTwo < myNumTwo) {
//     userNumTwo = parseInt(prompt("Sorry, " + userName + ", you guessed too low. Try again!"));
//   } else if (userNumTwo > myNumTwo) {
//     userNumTwo = parseInt(prompt("Sorry, " + userName + ", you guessed too high. Try again!"));
//   }
// }
