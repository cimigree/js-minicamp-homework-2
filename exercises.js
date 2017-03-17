//Do not change any of the function names

function getBiggest(x, y) {
  if (x > y)
  return x;
  else if (y > x)
  return y;
  else
  return y;
}

function greeting(language) {
  if (language==='German')
  return 'Guten Tag!';
  else if (language==='Spanish')
  return 'Hola!';
  else if (language==='English')
  return 'Hello!';
  else
  return 'Hello!';
}

function isTenOrFive(num) {
  if (num===5 || num===10)
  return true;
  else
  return false;
}

function isInRange(num) {
  if (num > 20 && num < 50)
  return true;
  else
  return false;
}

function isInteger(num) {
  if (num !== Math.floor(num))
  return false;
  else
  return true;
}

function fizzBuzz(num) {
  if (num % 5===0 && num % 3===0)
  return 'fizzbuzz';
  if (num%3===0)
  return 'fizz';
  if (num%5===0)
  return 'buzz';
  else
  return num;
}

function isPrime(num) {
  if (num === 1 || num === 0)
  return false;
  if (num===2)
  return true;
  if (num<8)
  {for (var i = 2; i < num; i++) {
    if (num%i===0)
    return false;
    else 
    return true;}
  } 
  else 
   {for (var j = 2; j < 8; j++) {
    if (num%j===0)
    return false;
    else 
    return true;}
  }
  }
function returnFirst(arr) {

  return arr[0];
}

function returnLast(arr) {
  return arr.pop();
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]=arr[i] + 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  var str = words.join();
  var newstr = str.replace(/,/g, ' ');
  return newstr;
}

function contains(arr, item) {
  if (arr.includes(item))
  return true;
  else 
  return false;
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
}

function addNumbers(numbers) {
  var sum=0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
  //numbers is an array of integers.
  //add all of the integers and return the value
}

function averageTestScore(testScores) {
  var sum = 0;
   for (var i = 0; i < testScores.length; i++) {
    sum = sum + testScores[i];
  }
  return sum/testScores.length;
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  //could use either method here
  // numbers.sort(function(a,b){return(a-b)});
  // var largest=numbers[numbers.length-1];
  // return largest;
  var largest = -1000000;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest)
    largest = numbers [i];
}
return largest;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
