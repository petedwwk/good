/*

Write a program that takes in as input the number of expected guests for a party, and outputs the number of oranges required to make enough Orange Juice for all guests.
To begin, assume:
It takes 4 oranges to make a glass of orange juice. 
Each guest will drink 2 glasses of Orange Juice on average. 
Subsequently, edit the functions written such that it takes in both the number of guests as well as the number of glasses per guest as input, and produces the same output: oranges required.

var orangeJuiceMain = function (numberOfGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // computes the total amount of oranges req. 
  var totalOrangesRequired = 4 * 2 * numberOfGuests;
  //displays the totalOrangesRequired
  var myOutputValue = `The total amount of oranges required is ${totalOrangesRequired}`;
  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var main = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

*/

//computing second example - to request for user to input - Total Guests + number of glasses per guest
/*
//helper function
var orangesNeeded = function (NoOfGuests, NoOfCups) {
  var totalOrangesRequired = NoOfGuests * NoOfCups * 4;
  return totalOrangesRequired;
};
//main function

var orangeJuiceMain = function (NoOfGuests, NoOfCups) {
  var myOutputValue = `The total amount of oranges required is ${orangesNeeded(
    NoOfCups,
    NoOfGuests
  )}`;
  return myOutputValue;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

*/
/*
// helper function for random dice rolls
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
// main function for random dice rolls
var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Personalise the output
  var myOutputValue =
    "Dice rolled " + randomDiceNumber + ". Your input was " + input + ".";
  // if input is the same as random number, output display ...
  if (input == randomDiceNumber);
  {
    myOutputValue = `You win`;
    //"Dice rolled " + randomDiceNumber + ". Your guess was " + input;
  }
  return myOutputValue;
};
*/

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
// main function for random dice rolls
var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Personalise the output
  var myOutputValue =
    "Dice rolled " + randomDiceNumber + ". Your input was " + input + ".";
  // if input is the same as random number, output display ...
  if (randomDiceNumber + 2 == input || randomDiceNumber - 2 == input);

  //myOutputValue = `You win`;
  myOutputValue =
    "Dice rolled " +
    randomDiceNumber +
    ". Your input was " +
    input +
    " you win.";
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  var myOutputValue = "the door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " but you are nearly there.";
  } else {
    myOutputValue += " nope, this is far from the right phrase.";
  }

  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
