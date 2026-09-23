/**
 * Returns the nth Fibonacci number.
 *
 * The sequence starts with 0 and 1, where each following number is the
 * sum of the previous two: 0, 1, 1, 2, 3, 5, ...
 *
 * @param {number} n - A non-negative integer sequence index.
 * @returns {number} The Fibonacci number at index n.
 * @throws {TypeError} If n is not a non-negative integer.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n must be a non-negative integer');
  }

  let previous = 0;
  let current = 1;

  for (let index = 0; index < n; index += 1) {
    [previous, current] = [current, previous + current];
  }

  return previous;
}

module.exports = fibonacci;
