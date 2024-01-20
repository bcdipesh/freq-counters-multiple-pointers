// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  // If str1 and str2 are empty then return true
  if (str1.trim().length === 0 && str2.trim().length === 0) return true;

  // If only str2 is empty return false
  if (str1.trim().length > 0 && str2.trim().length === 0) return false;

  // Create two variables to store index of str1 and str2. Initialize both of them to 0
  let str1Idx = 0;
  let str2Idx = 0;

  // Loop over letters of str2
  while (str2Idx < str2.length) {
    // If a letter is matched increase str1Idx
    if (str2[str2Idx] === str1[str1Idx]) str1Idx = str1Idx + 1;

    // If str1Idx reaches the end of str1 return true
    if (str1Idx === str1.length) return true;
    str2Idx = str2Idx + 1;
  }

  // If code execution reaches this line return false
  return false;
}
