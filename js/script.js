/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "You can fail at what you don't want, so might as well take a chance on doing what you love",
    author: "Jim Carrey"
  },
  {
    quote: "Consistency will knock the sh*t out of motivation every time",
    author: "Mark Bell"
  },
  {
    quote: "Sleep faster",
    author: "Arnold Schwarzenegger"
  },
  {
    quote: "I learned that if you work hard and creatively, you can have just about anything you want, but not everything you want. Maturity is the ability to reject good alternatives in order to pursue even better ones",
    author: "Ray Dalio"
  },
  {
    quote: "Fatigue is the best pillow",
    author: "Benjamin Franklin"
  },
  {
    quote: "Being realistic is the most commonly traveled road to mediocrity",
    author: "Will Smith"
  },
  {
    quote: "There’s no talent here, this is hard work. This is an obsession. Talent does not exist, we are all human beings. You could be anyone if you put in the time. You will reach the top, and that’s that. I am not talented, I am obsessed.",
    author: "Conor McGregor"
  }
]


/***
 * `getRandomQuote` function
***/

//First I am going to generate a random number that will not be greater than the length of the array of quotes.
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}
var randomNumber = getRandomInt(quotes.length - 1);

console.log(quotes.length);//TEST
console.log(randomNumber);//TEST




/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);