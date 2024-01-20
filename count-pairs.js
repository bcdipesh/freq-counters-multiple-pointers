// countPairs
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.
// Examples:
// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([0,2,4,6,8,10], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([2,4,6,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2

function countPairs(numsArr, targetSum) {
  // If numsArr is empty return 0
  if (numsArr.length === 0) return 0;

  // Create a variable called totalPairs and initialize it to 0
  let totalPairs = 0;

  // Sort the numsArr
  /**
   * Because the array is sorted, we do not have to add all the numbers with each other.
   * For ex [1, 2, 3, 4, 5], 7 => no matter if we add 1 with 2, 3 or 4 we will always get sum
   * less than the when it is added with 5. This removes unnecessary comparisons.
   */
  numsArr.sort((num1, num2) => num1 - num2);

  // Create two variables leftIdx and rightIdx. set leftIdx to 0 and rightIdx to the last index of numsArr
  let leftIdx = 0;
  let rightIdx = numsArr.length - 1;

  // Loop until leftIdx crosses rightIdx
  while (leftIdx < rightIdx) {
    // Check if sum of numbers at leftIdx and rightIdx equals targetSum
    const sum = numsArr[leftIdx] + numsArr[rightIdx];
    if (sum === targetSum) {
      // If it does increment totalPairs and move indexes closer
      totalPairs = totalPairs + 1;
      leftIdx++;
      rightIdx--;
    } else if (sum < targetSum) {
      // If sum is less than targetSum move leftIdx closer to rightIdx
      leftIdx++;
    } else {
      // If sum is greater than targetSum move rightIdx closer to leftIdx
      rightIdx--;
    }
  }

  return totalPairs;
}
