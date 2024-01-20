// constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function getFrequencyCounter(word) {
  let freqCounter = {};

  for (let letter of word) {
    freqCounter[letter] = freqCounter[letter] + 1 || 1;
  }

  return freqCounter;
}

function constructNote(message, letters) {
  // if letters and message are empty return true
  if (letters.length === 0 && message.length === 0) return true;

  // make a frequency counter of all the letters in message and letters
  const messageFreqCounter = getFrequencyCounter(message);
  const lettersFreqCounter = getFrequencyCounter(letters);

  // check if frequency counter of message matches with letters
  for (let letter of message) {
    // compare frequency counter
    if (!lettersFreqCounter[letter]) return false;
    if (messageFreqCounter[letter] > lettersFreqCounter[letter]) return false;
  }
  // if it makes out of the loop return true
  return true;
}
