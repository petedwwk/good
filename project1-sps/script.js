//global variable counter, mode, user name
var myOutputValue = "";
var mode = "input userName";
alert(`Please enter your name in the input box after clicking ok.`);
console.log(mode, myOutputValue);

var userName = "";
// counter for user wins & //counter for computer wins
var userCounterWins = 0;
var compCounterWins = 0;
var winningStats = 0;

//main function
var main = function (input) {
  //user input - scissors paper stone
  console.log(mode, input);

  //  var myOutputValue = "";

  if (mode == "input userName") {
    userName = input;
    mode = "play SPS";
    myOutputValue = `Hi ${userName}, welcome to scissors, paper, stone! Let's fight! <br> Please enter either scissors, paper, or stone.`;
    return myOutputValue;
  } else if (mode == "play SPS") {
    //validate input to be scissors paper stone
    if (input != "scissors" && input != "paper" && input != "stone") {
      //display error if input is not scissors paper stone
      myOutputValue = `Please kindly input either scissors, paper, or stone.`;
      return myOutputValue;
    }
    //declare Var to call upon generate random output comp. Remeber to put () if we're calling a function.
    var compOutput = generateRandomOutputComp();
    winningStats = (
      ((userCounterWins - compCounterWins) / compCounterWins) *
      100
    ).toFixed(2);
    //win conditions
    if (
      (input == "scissors" && compOutput == "paper") ||
      (input == "paper" && compOutput == "stone") ||
      (input == "stone" && compOutput == "scissors")
    ) {
      // {} is needed to put this as a block.
      console.log(`You played ${input} and computer played ${compOutput}`);
      userCounterWins += 1;
      //winningStats = (        ((userCounterWins - compCounterWins) / compCounterWins) *        100      ).toFixed(2);
      myOutputValue = `${userName} won a total of ${userCounterWins} times! You played ${input}, and computer played ${compOutput} <br> Your winning rate is ${winningStats}%`;
      return myOutputValue;
    }
    //lose conditions
    else if (
      (input == "scissors" && compOutput == "stone") ||
      (input == "stone" && compOutput == "paper") ||
      (input == "paper" && compOutput == "scissors")
    ) {
      compCounterWins += 1;
      myOutputValue = `Computer won a total of ${compCounterWins} times. ${compOutput} beats ${userName}'s ${input}`;
      return myOutputValue;
    } //draw - can refine.
    if (input == compOutput)
      console.log(`You played ${input} and compute played ${compOutput}`);
    myOutputValue = `${userName} you DRAAAAAAW with the computer!`;
    return myOutputValue;
  }
};
//helper function - generate random number to match to computer ouput - Scissor / Paper / Stone
var generateRandomOutputComp = function () {
  // create var to generate random numbers
  var compGenerate = Math.floor(Math.random() * 3) + 1;
  //declare result as var
  var result;
  if (compGenerate == 1) {
    result = "scissors";
  } else if (compGenerate == 2) {
    result = "paper";
  } else {
    result = "stone";
  }
  console.log(`Comp Generate: ${result}`);
  return result;
};
