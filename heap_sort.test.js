const assert = require('assert');
const heapSort = require('./heap_sort');

const input = [4, 10, 3, 5, 1, -2, 10];
const original = input.slice();
assert.deepStrictEqual(heapSort(input), [-2, 1, 3, 4, 5, 10, 10]);
assert.deepStrictEqual(input, original);
assert.deepStrictEqual(heapSort([]), []);
assert.deepStrictEqual(heapSort([7]), [7]);
assert.deepStrictEqual(heapSort([3, 3, 3]), [3, 3, 3]);
assert.deepStrictEqual(heapSort([0, -0, 2, -1]), [-1, -0, 0, 2]);

assert.throws(() => heapSort(null), TypeError);
assert.throws(() => heapSort('3,2,1'), TypeError);
assert.throws(() => heapSort([1, '2']), TypeError);
assert.throws(() => heapSort([1, NaN]), RangeError);
assert.throws(() => heapSort([Infinity]), RangeError);
assert.throws(() => heapSort([, 1]), TypeError);

console.log('Heap sort tests passed');
