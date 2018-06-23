// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // Create array representation of cardNumber  
  let cardNumArr = cardNumber.split('');

  // Check Diner Club length and prefix
  let isDinersClub = 
    cardNumArr[0] == 3
    &&
    (cardNumArr[1] == 8 || cardNumArr[1] == 9)
    &&
    cardNumber.length === 14;
  
  if (isDinersClub) {
    return 'Diner\'s Club';
  }
  
  // Check AE length and prefix
  let isAmericanExpress = 
    cardNumArr[0] == 3
    &&
    (cardNumArr[1] == 4 || cardNumArr[1] == 7)
    &&
    cardNumber.length === 15;

  if (isAmericanExpress) {
    return 'American Express';
  }


};

console.log(detectNetwork('38345678901234'));
console.log(detectNetwork('39345678901234'));
console.log(detectNetwork('343456789012345'));
console.log(detectNetwork('373456789012345'));