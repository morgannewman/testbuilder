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

  // Check Visa length and prefix
  let isVisa = 
    cardNumArr[0] == 4
    &&
    (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19);
  
  if (isVisa) {
    return 'Visa';
  }

  // Check MasterCard length and prefix
  let isMasterCard = 
    cardNumArr[0] == 5
    &&
    (cardNumArr[1] == 1 || cardNumArr[1] == 2 || cardNumArr[1] == 3 || cardNumArr[1] == 4 || cardNumArr[1] == 5)
    &&
    cardNumber.length === 16;
  
  if (isMasterCard) {
    return 'MasterCard';
  }

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

  // Check Discover length and prefix
  let isDiscover = 
    cardNumber.slice(0,4) == '6011'
    &&
    (cardNumber.length === 16 || cardNumber.length === 19);

  if (isDiscover) {
    return 'Discover';
  }
  // Check Maestro length and prefix
  let isMaestro = 
    (cardNumber.slice(0,4) == '5018' || cardNumber.slice(0,4) == '5020' || cardNumber.slice(0,4) == '5038' || cardNumber.slice(0,4) == '6304')
    &&
    (cardNumber.length >= 12 && cardNumber.length <= 19);

  if (isMaestro) {
    return 'Maestro';
  }

  let isChinaUnionPay = 
    cardNumber.slice(0,2) == '65'
    &&
    (cardNumber.length === 16 || cardNumber.length === 19);

  if (isChinaUnionPay) {
    return 'China UnionPay';
  }

  let isSwitch = 
    (Number(cardNumber.slice(0,3)) >= 644 && Number(cardNumber.slice(0,3)) <= 649)
    &&
    (cardNumber.length === 16 || cardNumber.length === 19);

  if (isSwitch) {
    return 'Switch';
  }

};


detectNetwork('38345678901234');
detectNetwork('39345678901234');
detectNetwork('343456789012345');
detectNetwork('373456789012345');
detectNetwork('4123456789012');
detectNetwork('4123456789012345');
detectNetwork('4123456789012345678');
detectNetwork('5112345678901234');
detectNetwork('5212345678901234');
detectNetwork('5312345678901234');
detectNetwork('5412345678901234');
detectNetwork('5512345678901234');
