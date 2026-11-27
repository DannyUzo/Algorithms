/**
 * Sorts a copy of an array of finite numbers in ascending order using heap sort.
 *
 * Heap sort builds a max heap, then repeatedly moves its largest value to the
 * end of the array. It is useful when predictable O(n log n) sorting time is
 * desired without recursion; this implementation leaves the input unchanged.
 * The input must be a dense array of finite numbers.
 *
 * @param {number[]} values - Values to sort.
 * @returns {number[]} A new array containing the values in ascending order.
 * @throws {TypeError} If values is not an array or contains a non-number.
 * @throws {RangeError} If values contains a non-finite number.
 *
 * Time complexity: O(n log n) in best, average, and worst cases.
 * Space complexity: O(n) for the returned copy; heap operations use O(1)
 * additional space.
 *
 * Example:
 * const heapSort = require('./heap_sort');
 * heapSort([4, 1, 3, 2]); // [1, 2, 3, 4]
 */
function heapSort(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('values must be an array');
  }

  for (let i = 0; i < values.length; i += 1) {
    if (typeof values[i] !== 'number') {
      throw new TypeError(`value at index ${i} must be a number`);
    }
    if (!Number.isFinite(values[i])) {
      throw new RangeError(`value at index ${i} must be finite`);
    }
  }

  const result = values.slice();

  function siftDown(root, end) {
    while (true) {
      const left = 2 * root + 1;
      if (left > end) return;

      const right = left + 1;
      let largest = left;
      if (right <= end && result[right] > result[left]) {
        largest = right;
      }
      if (result[root] >= result[largest]) return;

      [result[root], result[largest]] = [result[largest], result[root]];
      root = largest;
    }
  }

  for (let start = Math.floor(result.length / 2) - 1; start >= 0; start -= 1) {
    siftDown(start, result.length - 1);
  }

  for (let end = result.length - 1; end > 0; end -= 1) {
    [result[0], result[end]] = [result[end], result[0]];
    siftDown(0, end - 1);
  }

  return result;
}

module.exports = heapSort;
