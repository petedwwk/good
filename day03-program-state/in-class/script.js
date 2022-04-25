/*Create a game where a player must correctly guess secret words to win.
The computer chooses a random word from a set of three words. Feel free to use whatever words you'd like, but we will be using the words "banana", "chisel", and "faucet".
To win the game the player must guess correctly twice in total; but is allowed to guess wrongly in between their two correct guesses.
For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.
*/

// global variables to keep score
var winCounterUser = 0;
var winCounterComp = 0;

//helper function - to generate random word banana, chisel, faucet
var generateRandomWord = function () {
  //amount of random numbers required would be equal to number of conditions
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var result;
  //conditionals, require 3 random numbers to be generated.
  if (randomNumber == 1) {
    result = "banana";
  } else if (randomNumber == 2) {
    result = "chisel";
  } else {
    result = "faucet";
  }
  console.log(`Your result is ${result}`);
  return result;
};

var secretWordBaseMain = function (guessWord) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function
  var myOutputValue = "";
  if (guessWord != "banana" && guessWord != "chisel" && guessWord != "faucet") {
    myOutputValue = `Please try either banana, chisel, or faucet`;
    return myOutputValue;
  }
  var randomWord = generateRandomWord();
  if (guessWord == randomWord) {
    /* winCounterUser += 1;*/
    myOutputValue =
      "hi" /*`Guess Word: ${guessWord}, Secret Word; ${randomWord}, Remaining Correct Guesses:${
      2 - winCounterUser
    }`*/;
  } else {
    winCounterComp += 1;
    console.log(guessWord, winCounterComp);
    myOutputValue =
      "bye" /*`Guess Word: ${guessWord}, Secret Word; ${randomWord}, Remaining Guesses: ${
      2 - winCounterUser
    }`*/;
  }
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
