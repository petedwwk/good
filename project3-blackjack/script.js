//Game modes - Deal cards - player 1 and 2, evaluate for blackjack, hit or stand, declare winner
var startGame = `Game start`;
var cardsDrawn = `Cards Drawn`;
var hitOrStand = `Hit or Stand`;

var CurrentGameMode = startGame;
console.log(CurrentGameMode);
/*========= game deck ===========*/
//var gameDeck = "";
/*=========Player and dealer card to push into the array ========= */
var myOutputValue = "";
var playerDrawOne = "";
var playerDrawTwo = "";
var dealerDrawOne = "";
var dealerDrawTwo = "";
/*============== Array ===============*/
var playerHand = [];
var dealerHand = [];
var newDeck = [];
/************** FUNCTIONS  *******************/

//Display messages
var printPlayerAndDealerHands = function (playerHandArray, dealerHandArray) {
  //player hand
  var printPlayerMessage = "<br>Player Hand:<br>";
  var index = 0;
  while (index < playerHandArray.length) {
    printPlayerMessage = `${printPlayerMessage} - ${playerHandArray[index].name} of ${playerHandArray[index].suit}<br>`;
    index = index + 1;
  }
  // dealer hand
  var index = 0;
  var printDealerMessage = "<br>Dealer Hand<br>";
  while (index < dealerHandArray.length) {
    printDealerMessage = `${printDealerMessage} ${dealerHandArray[index].name} of ${dealerHandArray[index].suit}  <br>`;
    index = index + 1;
  }

  return `${printPlayerMessage} ${printDealerMessage}`;
};

//Display total value
var printTotalValuePlayerAndDealer = function (
  playerTotalValue,
  dealerTotalValue
) {
  var totalHandValue =
    "<br>Player Hand Value:" +
    playerTotalValue +
    "<br> Dealer Total Hand Value:" +
    dealerTotalValue;

  return totalHandValue;
};

//make deck
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

//Shuffling cards
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

//Creates new deck
var createNewDeck = function () {
  var newDeck = makeDeck();
  var shuffledCards = shuffleCards(newDeck);
  console.log(shuffledCards);
  return shuffledCards;
};

// Evaluate for Blackjack function - both dealer and player.
var checkForBlackJack = function (handArray) {
  var playerCardOne = handArray[0];
  var playerCardTwo = handArray[1];
  var tioBlackJack = false;

  if (
    (playerCardOne.rank >= 10 && playerCardTwo.name == "ace") ||
    (playerCardOne.name == "ace" && playerCardTwo.rank >= 10)
  ) {
    tioBlackJack = true;
  }
  return tioBlackJack;
};

//Calculating total hand value
var calculateTotalHandValue = function (handArray) {
  var totalHandValue = 0;
  // hand value more than 21 then ace would be 1
  var aceCounter = 0;
  var index = 0;
  while (index < handArray.length) {
    var currentCard = handArray[index];
    if (
      currentCard.name == "jack" ||
      currentCard.name == "queen" ||
      currentCard.name == "king"
    )
      totalHandValue += 10;
    else if (currentCard.name == "ace") {
      totalHandValue += 11;
      aceCounter += 1;
    } else {
      totalHandValue += currentCard.rank;
    }
    index += 1;
  }
  index = 0;
  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index = index + 1;
  }
  return totalHandValue;
};

/* Main Function */
/* ============= */
var main = function (input) {
  var myOutputValue = "";
  var newDeck = createNewDeck();

  if (CurrentGameMode == startGame) {
    //new deck
    var shuffledDeck = shuffleCards(newDeck);
    //deals to player - 2 cards
    var playerDrawOne = shuffledDeck.pop();
    console.log(playerDrawOne);
    //"push into the array for player"
    playerHand.push(playerDrawOne);
    //"deals the next card"
    var playerDrawTwo = shuffledDeck.pop();
    console.log(playerDrawTwo);
    //"push into the array for player"
    playerHand.push(playerDrawTwo);

    //same as player but for the dealer
    var dealerDrawOne = shuffledDeck.pop();
    console.log(dealerDrawOne);
    dealerHand.push(dealerDrawOne);
    var dealerDrawTwo = shuffledDeck.pop();
    console.log(dealerDrawTwo);
    dealerHand.push(dealerDrawTwo);
    // change mode to cards drawn - evaluate for Blackjack
    CurrentGameMode = cardsDrawn;

    myOutputValue = `Cards drawn.<br> ${printPlayerAndDealerHands(
      playerHand,
      dealerHand
    )} <br>Press submit to evaluate!`;
    return myOutputValue;
  }
  // checking for blackjack - tie or player wins or dealer wins
  if (CurrentGameMode == cardsDrawn) {
    var playerTioBlackjack = checkForBlackJack(playerHand);
    var dealerTioBlackjack = checkForBlackJack(dealerHand);
    var playerHandTotalValue = calculateTotalHandValue(playerHand);
    var dealerHandTotalValue = calculateTotalHandValue(dealerHand);
    //condtion to check if code works
    //playerTioBlackjack = true;
    //dealerTioBlackjack = true;

    // evaluating for Blackjack
    if (playerTioBlackjack == true || dealerTioBlackjack == true) {
      if (playerTioBlackjack == true && dealerTioBlackjack == true) {
        console.log(playerTioBlackjack, dealerTioBlackjack);
        myOutputValue = `draw ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh for new game`;
      }
      // player blackjack - win
      else if (playerTioBlackjack == true && dealerTioBlackjack == false) {
        myOutputValue = `Player wins by blackjack! ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh for new game`;
      }
      // dealer blackjack - win
      else {
        myOutputValue = `Dealer wins! ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh for new game`;
      }
    }
    //Evaluation completed and there is no blackjack
    else {
      myOutputValue = `Neither have Blackjack. Enter hit or stand!<br> ${printPlayerAndDealerHands(
        playerHand,
        dealerHand
      )} ${printTotalValuePlayerAndDealer(
        playerHandTotalValue,
        dealerHandTotalValue
      )}`;

      var playerHandTotalValue = calculateTotalHandValue(playerHand);
      var dealerHandTotalValue = calculateTotalHandValue(dealerHand);

      CurrentGameMode = hitOrStand;
    }
    return myOutputValue;
  }

  if (CurrentGameMode == hitOrStand) {
    if (input == "hit") {
      playerHand.push(newDeck.pop());
      playerHandTotalValue = calculateTotalHandValue(playerHand);
      dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      console.log(playerHand);
      myOutputValue = `${printPlayerAndDealerHands(playerHand, dealerHand)} 
        <br> You drew another card. ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )} <br>Please input "hit" or "stand".`;
    }

    // Condition where player inputs 'stand'
    else if (input == "stand") {
      // Dealer's hit or stand logic
      dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      playerHandTotalValue = calculateTotalHandValue(playerHand);
      while (dealerHandTotalValue < 17) {
        dealerHand.push(newDeck.pop());
        dealerHandTotalValue = calculateTotalHandValue(dealerHand);
        playerHandTotalValue = calculateTotalHandValue(playerHand);
      }
      //tie conditions
      if (
        playerHandTotalValue == dealerHandTotalValue ||
        (playerHandTotalValue <= 21 && dealerHandTotalValue <= 21)
      ) {
        myOutputValue = `Tie! ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh for new game`;
      }
      //player greater than dealer
      else if (
        (playerHandTotalValue > dealerHandTotalValue &&
          playerHandTotalValue <= 21) ||
        (playerHandTotalValue <= 21 && dealerHandTotalValue > 21)
      ) {
        myOutputValue = `Player wins! ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh for new game`;
      }
      // dealer wins
      else {
        myOutputValue = `Dealer wins! ${printTotalValuePlayerAndDealer(
          playerHandTotalValue,
          dealerHandTotalValue
        )}<br><br>Refresh for new game`;
      }
    } else {
      myOutputValue = `Please input only either hit or stand`;
    }
    return myOutputValue;
  }
};
