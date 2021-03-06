/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() { 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901232') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});


describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
    
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  let discoverLengths = [16, 19];
  
  for (length of discoverLengths) {
    // 6011 prefix
    +function(length){
      it('has a prefix of 6011 and a length of ' + length, function() {
        detectNetwork('6011' + '1'.repeat(length-4)).should.equal('Discover');
      });
    }(length);

    // 644-649 prefixes
    for (let prefix = 644; prefix <= 649; prefix++) {
      +function(prefix, length) {
        it('has a prefix of '+ prefix + ' and a length of ' + length, function() {
            detectNetwork(prefix + '1'.repeat(length-3)).should.equal('Discover');
        });
      }(prefix, length);
    }

    // 65 prefix
    +function(length) {
      it('has a prefix of 65 and a length of ' + length, function() {
        detectNetwork('65' + '1'.repeat(length-2)).should.equal('Discover');
      });
    }(length);
  }
});

describe('Maestro', function() {
  // Create an array of prefixes
  let maestroPrefixes = ['5018', '5020', '5038', '6304'];
  // Loop through each prefix in the array
  for (prefix of maestroPrefixes) {
    // Test all possible prefix and length combinations
    for (let length = 12; length <= 19; length++) {
      +function(prefix, length) {
        it('has a prefix of ' + prefix + ' and length of ' + length, function() {
        detectNetwork(prefix + '1'.repeat(length-4)).should.equal('Maestro');
        });
      }(prefix,length);
    }
  }
});


// China UnionPay always has a prefix of 622126-622925, 
// 624-626, or 6282-6288 and a length of 16-19.
describe('China UnionPay', function() {
  let possibleLengths = [16, 17, 18, 19];

  // Iterate through each possible length
  for (length of possibleLengths) {
    // 622126-622925 numbers
    for (let prefix = 622126; prefix <= 622925; prefix++) {
      +function(prefix, length) {
        it('has a prefix of ' + prefix + ' and length of ' + length, function() {
          detectNetwork(prefix + '1'.repeat(length-6)).should.equal('China UnionPay');
        });
      }(prefix,length);
    }
    // 624-626 numbers
    for (let prefix = 624; prefix <= 626; prefix++) {
      +function(prefix, length) {
        it('has a prefix of ' + prefix + ' and length of ' + length, function() {
          detectNetwork(prefix + '1'.repeat(length-3)).should.equal('China UnionPay');
        });
      }(prefix,length);
    }
    // 6282-6288 numbers
    for (let prefix = 6282; prefix <= 6288; prefix++) {
      +function(prefix, length) {
        it('has a prefix of ' + prefix + ' and length of ' + length, function() {
          detectNetwork(prefix + '1'.repeat(length-4)).should.equal('China UnionPay');
        });
      }(prefix,length);
    }
  }
});

// Switch always has a prefix of 4903, 4905, 4911, 4936, 
// 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('Switch', function() {
  let fourNumPrefixes = [4903, 4905, 4911, 4936,6333, 6759];
  let sixNumPrefixes = [564182, 633110];
  let possibleLengths = [16, 18, 19];

  for (length of possibleLengths) {
    // Four number prefixes
    for (prefix of fourNumPrefixes) {
      +function(prefix, length) {
        it('has a prefix of ' + prefix + ' and length of ' + length, function() {
          detectNetwork(prefix + '1'.repeat(length-4)).should.equal('Switch');
        });
      }(prefix,length);
    }
    // Six number prefixes
    for (prefix of sixNumPrefixes) {
      +function(prefix, length) {
        it('has a prefix of ' + prefix + ' and length of ' + length, function() {
          detectNetwork(prefix + '1'.repeat(length-6)).should.equal('Switch');
        });
      }(prefix,length);
    }
  }
});




// Heads up! Switch and Visa seem to have some overlapping 
// card numbers - in any apparent conflict, 
// you should choose the network with the longer prefix.