/// Initialise an empty names array
var names = [];

var main = function (input) {
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name already
  // exists in the names array
  var index = 0;

  for (var index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = "All names: " + names;
  return myOutputValue;
};

//var letters = ["a", "b", "c"];

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
