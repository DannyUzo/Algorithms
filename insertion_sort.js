/**
 * Sorts a copy of an array of finite numbers using insertion sort.
 *
 * Insertion sort grows a sorted prefix one item at a time by moving each
 * current value left until it is in the correct position. It is simple and
 * effective for small or nearly sorted arrays, and it does not mutate input.
 *
 * @param {number[]} values - The numbers to sort.
 * @returns {number[]} A new array containing the values in ascending order.
 * @throws {TypeError} If values is not an array of finite numbers.
 *
 * Time complexity: O(n^2) average and worst case; O(n) best case for sorted input.
 * Space complexity: O(n) for the copied result.
 *
 * Example:
 * insertionSort([5, 2, 4, 6, 1, 3]); // [1, 2, 3, 4, 5, 6]
 */
function insertionSort(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }

  if (!values.every(Number.isFinite)) {
    throw new TypeError('values must contain only finite numbers');
  }

  const sorted = values.slice();

  for (let index = 1; index < sorted.length; index += 1) {
    const current = sorted[index];
    let position = index - 1;

    while (position >= 0 && sorted[position] > current) {
      sorted[position + 1] = sorted[position];
      position -= 1;
    }

    sorted[position + 1] = current;
  }

  return sorted;
}

module.exports = insertionSort;
