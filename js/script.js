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


//This is an array some of my favorite motivational quotes.
var quotes = [
  {
    quote: "You can fail at what you don't want, so might as well take a chance on doing what you love",
    source: "Jim Carrey",
    citation: "Maharishi University Commencement",
    year: "2014"
  },
  {
    quote: "Consistency will knock the sh*t out of motivation every time",
    source: "Mark Bell"
  },
  {
    quote: "Sleep faster",
    source: "Arnold Schwarzenegger",
  },
  {
    quote: "I learned that if you work hard and creatively, you can have just about anything you want, but not everything you want. Maturity is the ability to reject good alternatives in order to pursue even better ones",
    source: "Ray Dalio",
    citation: "Principles- life and work",
    year: "2019"
  },
  {
    quote: "Fatigue is the best pillow",
    source: "Benjamin Franklin"
  },
  {
    quote: "Being realistic is the most commonly traveled road to mediocrity",
    source: "Will Smith"
  },
  {
    quote: "There’s no talent here, this is hard work. This is an obsession. Talent does not exist, we are all human beings. You could be anyone if you put in the time. You will reach the top, and that’s that. I am not talented, I am obsessed.",
    source: "Conor McGregor"
  }
]



var quoteBox = document.getElementById("quote-box");




/***
 * `getRandomQuote` function
***/

//I use the Math.random function that will generate a number that is between 0 and the length of the array.  Then I will return the object that is located in the corresponding index number in the quotes array.

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}



/***
 * `printQuote` function
***/

//Store the result of the printQuote function in the objectToPrint variable.
//Set variable messageToPrint tat will be made of of the different elements of the quote.
//There are two properties that are not in all of the quote objects.
//The if statements will print out the properties if their value is not undefined.

function printQuote(){
  
  let objectToPrint = getRandomQuote();
  let messageToPrint = '';
  messageToPrint += '<p class="quote">' + objectToPrint.quote + '</p>';
  messageToPrint += '<p class="source">' + objectToPrint.source;
    if(objectToPrint.citation !== undefined){
      messageToPrint += '<span class="citation">' + objectToPrint.citation + '</span>';
    };
    if(objectToPrint.year !== undefined){
      messageToPrint += '<span class="year">' + objectToPrint.year + '</span>';
    }; +  '</p>'; 

  quoteBox.innerHTML = messageToPrint;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);