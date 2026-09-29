/**
 * Merges two sorted arrays into a single sorted array.
 *
 * This is the foundational combine step of the Merge Sort algorithm.
 * It takes two sorted arrays and compares their elements one by one,
 * building a new sorted array.
 *
 * @param {number[]} left - A sorted array of numbers.
 * @param {number[]} right - A sorted array of numbers.
 * @returns {number[]} A single sorted array containing all elements from both inputs.
 * @throws {TypeError} If either argument is not an array.
 *
 * Time complexity: O(n + m), where n and m are the lengths of the left and right arrays.
 * Space complexity: O(n + m) for the resulting array.
 */
function mergeSortedArrays(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right)) {
    throw new TypeError('Both inputs must be arrays');
  }

  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex += 1;
  }

  return result;
}

module.exports = mergeSortedArrays;
