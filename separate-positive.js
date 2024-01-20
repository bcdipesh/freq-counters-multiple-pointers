// separatePositive
// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).
// Examples:
// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]

function separatePositive(numsArr) {
  // If numsArr is empty return it
  if (numsArr.length === 0) return numsArr;

  /**
   * Create two variable leftIdx and rightIdx.
   * Set leftIdx to start at 0 and rightIdx to start at the end
   * of the numsArr
   */
  let leftIdx = 0;
  let rightIdx = numsArr.length - 1;

  // Loop over the numsArr until leftIdx or rightIdx overlap each other
  while (leftIdx < rightIdx) {
    // If current num at leftIdx is negative swap it with a positive num at rightIdx
    if (numsArr[leftIdx] < 0) {
      let temp = numsArr[leftIdx];
      if (numsArr[rightIdx] > 0) {
        numsArr[leftIdx] = numsArr[rightIdx];
        numsArr[rightIdx] = temp;
        leftIdx++;
      } else {
        rightIdx--;
      }
    } else {
      leftIdx++;
    }
  }

  // return numsArr
  return numsArr;
}
