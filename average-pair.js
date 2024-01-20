// averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Constraints:
// Time Complexity: O(N)
// Examples:
// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

function averagePair(arr, targetAverage) {
  // Return false if array is empty
  if (arr.length === 0) return false;

  /**
   * Use two indexes left and right. The left should start from the beginning of the array and the right from the end.
   * Use a while loop and loop until left and right are the same or targetAverage is found.
   * For every loop take average of elements at left and right index.
   * If the average is smaller than the targetAverage increase the left index.
   * If the average is greater than the targetAverage decrease the right index.
   *
   * Return true if average equals targetAverage
   */
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    const average = (arr[left] + arr[right]) / 2;

    if (average === targetAverage) return true;

    if (average < targetAverage) left = left + 1;
    else right = right - 1;

    console.log(average);
  }

  // If code execution continues out of the loop then return false
  return false;
}
