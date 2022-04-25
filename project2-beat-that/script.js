//Get players to input username. mode == "input Username1"
//Store as Player 1 and Player 2 mode == "input Username2"
//Return to mode for Player 1 - Prompt Player 1 to press submit

//helper function for dice roll - have a loop for dice to output 2 numbers?
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

var rollDice2 = function () {
  var randomDecimal2 = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger2 = Math.floor(randomDecimal2);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber2 = randomInteger2 + 1;
  return diceNumber2;
};

//Get player 1 to decide order of dice - Largest combo is best. Must store value for player 1's input.
//Return to mode for Player 2 - Prompt Player 2 to press submit
//Get player 2 to decide order of dice - Largest combo is best. Must store value for player 2's input.
//compare both results and determine winner.
//print stats? total valid games + total win/losses

//declare array for Player 1 and Player 2
var playerOneName = [];
var playerTwoName = [];
var playerOneInput = [];
var playerTwoInput = [];

//username mode
var mode = "instructions";

// main function for random dice rolls
var main = function (input) {
  if (mode == "instructions") {
    mode = "input username";
    var myOutputValue = "Please enter your username";
    return myOutputValue;
  }
  // think how to make this into a helper function.
  if (mode == "input username") {
    playerOneName.push(input);
    mode = "input username2";
    console.log("User 1: ", input);
    return `Hi ${playerOneName}! Welcome to Beat That! <br> Player Two, please enter your name.`;
  }
  if (mode == "input username2") {
    playerTwoName.push(input);
    console.log("User 2:", input);
    mode = "playerOne's turn";
    return `Hi ${playerTwoName}! Welcome to Beat That! <br> You are playing against ${playerOneName}. <br> Please press submit once more for ${playerOneName}'s turn.`;
  }
  if (mode == "playerOne's turn") {
    var diceRollOne = rollDice();
    var diceRollTwo = rollDice2();
    myOutputValue = `${playerOneName}'s rolled the following Dice 1: ${diceRollOne} and Dice 2: ${diceRollTwo}. <br> Please enter the order you wish to.`;
    console.log(diceRollOne, diceRollTwo);
    mode = "playerOne's input";
    return myOutputValue;
  }
  if (mode == "playerOne's input") {
    //playerOneInput.push(input);
    if (
      input != diceRollOne + "diceRollTwo" &&
      input != diceRollTwo + "diceRollOne"
    ) {
      myOutputValue = `Please kindly input either  or ${diceRollTwo} in the preferred order.`;
      //display error if input is not scissors paper stone
    }
    console.log("Player One:", input);
    mode = `playerTwo's turn`;
    myOutputValue = `${playerTwoName}'s turn! Press submit`;
    return myOutputValue;
  }

  if (mode == "playerTwo's turn") {
    var diceRollOne = rollDice();
    var diceRollTwo = rollDice2();
    myOutputValue = `${playerTwoName}'s rolled the following Dice 1: ${diceRollOne} and Dice 2: ${diceRollTwo}. <br> Please enter the order you wish to.`;
    console.log(diceRollOne, diceRollTwo);
    mode = "playerTwo's input";
    return myOutputValue;
  }
  if (mode == "playerTwo's input") {
    playerTwoInput.push(input);
    console.log("Player Two:", playerTwoName, input);
    mode = `compare`;
  }
  // accessing an array would require [0]
  if (mode == "compare") {
    var getUserInput1 = playerOneInput;
    var getUserInput2 = playerTwoInput;

    if (getUserInput1 > getUserInput2) {
      console.log(getUserInput1, getUserInput2);
      myOutputValue = `${playerTwoName} loses! ${playerOneName} you win!!!!!`;
    } else if (getUserInput1 < getUserInput2) {
      console.log(getUserInput1, getUserInput2);
      myOutputValue = `${playerOneName} loses! ${playerTwoName} you win!!!!!`;
      // halp!
    } else if (getUserInput1 == getUserInput2) {
      console.log(getUserInput1, getUserInput2);
      myOutputValue = `${playerOneName} and ${playerTwoName} TIEEEEEE BREAKERRRR`;
    }
    return `${myOutputValue} Refresh to play again`;

    //points for improvement
    //must return to start - intiate again for round 2 - infinity.
    // dice - type 1 or 2 to choose which goes first
    //
  }
};
