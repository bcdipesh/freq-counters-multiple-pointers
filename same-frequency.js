// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Examples:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function getFreqCounter(str) {
  let counter = {};

  for (let letter of str) {
    counter[letter] = counter[letter] + 1 || 1;
  }

  return counter;
}

function sameFrequency(num1, num2) {
  // Create two variables called num1Str and num2Str
  let num1Str = "";
  let num2Str = "";

  // Convert num1 and num2 to string and store the result in num1Str and num2Str respectively
  num1Str = "" + num1;
  num2Str = "" + num2;

  // If the lenght of num1Str and num2Str doesn't match return false
  if (num1Str.length !== num2Str.length) return false;

  // If num1Str or num2Str null or undefined return false
  if (
    num1Str === "null" ||
    num1Str === "undefined" ||
    num2Str === "null" ||
    num2Str === "undefined"
  )
    return false;

  // Create two variables num1FreqCounter and num2FreqCounter
  /**
   * Get the frequency counter of letters in num1Str and num2Str
   * and store the result in num1FreqCounter and num2FreqCounter
   */
  const num1FreqCounter = getFreqCounter(num1Str);
  const num2FreqCounter = getFreqCounter(num2Str);

  // Compare num1FreqCounter and num2FreqCounter
  for (let letter of num1Str) {
    if (num1FreqCounter[letter] !== num2FreqCounter[letter]) return false;
  }

  return true;
}
