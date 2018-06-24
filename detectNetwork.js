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

  

  // Switch always has a prefix of 4903, 4905, 4911, 4936, 
  // 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping 
  // card numbers - in any apparent conflict, 
  // you should choose the network with the longer prefix.
  let isSwitch = 
    ((cardNumber.slice(0,2) === '49' && (cardNumber.slice(2,4) === '03' || cardNumber.slice(2,4) === '05' || 
      cardNumber.slice(2,4) === '11' || cardNumber.slice(2,4) === '36'))
    ||
    cardNumber.slice(0,6) == 564182 
    || 
    cardNumber.slice(0,6) == 633110
    ||
    cardNumber.slice(0,4) == 6333
    ||
    cardNumber.slice(0,4) == 6759)
    &&
    (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19);

  if (isSwitch) {
    return 'Switch';
  }
  
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
    (cardNumber.slice(0,4) === '6011'
    ||
    (Number(cardNumber.slice(0,3)) >= 644 && Number(cardNumber.slice(0,3)) <= 649)
    ||
    cardNumber.slice(0,2) == '65')
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

  // China UnionPay always has a prefix of 622126-622925, 
  // 624-626, or 6282-6288 and a length of 16-19.
  let isChinaUnionPay = 
    ((Number(cardNumber.slice(0,6)) >= 622126 && Number(cardNumber.slice(0,6)) <= 622925)
    ||
    (Number(cardNumber.slice(0,3)) >= 624 && Number(cardNumber.slice(0,3)) <= 626)
    ||
    (Number(cardNumber.slice(0,4)) >= 6282 && Number(cardNumber.slice(0,4)) <= 6288))
    &&
    (cardNumber.length >= 16 && cardNumber.length <= 19);

  if (isChinaUnionPay) {
    return 'China UnionPay';
  }
};