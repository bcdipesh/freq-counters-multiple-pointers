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

  // Loop over numsArr
  for (let i = 0; i < numsArr.length; i++) {
    /**
     * For each iteration loop over numsArr and check if the sum of
     * current number from outer loop and inner loop equals targetSum
     * If it does increase totalPairs
     */
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] + numsArr[j] === targetSum) totalPairs = totalPairs + 1;
    }
  }

  return totalPairs;
}
