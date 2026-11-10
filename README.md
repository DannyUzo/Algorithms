# Data Structures and Algorithms Overview

This repository contains implementations of various data structures and algorithms based on the concepts covered in a video tutorial on Data Structures and Algorithms. The tutorial covered a wide range of topics including:

- Stacks
- Queues
- Similarities and differences between stacks and queues
- Sets
- Binary Search Tree
- Linked Lists
- Tries
- Essential methods such as `peek`, `pop`,`push`, `size`, `reduce`, `repeat`, `unshift`, `shift`.

## Implemented Algorithms

### Stack Algorithm

Utilizing the knowledge gained from the tutorial, I derived different approaches to implement the stack algorithm. These implementations can be found in the `practicestack.js` file.

### Mean and Median Calculation

Additionally, I wrote simple algorithms to find the mean and median of an array of numbers. These algorithms are implemented in their respective files.

### Fibonacci

The `fibonacci.js` file contains an iterative implementation of the Fibonacci sequence. It returns the value at a zero-based index, validates that the input is a non-negative integer, and runs in **O(n)** time with **O(1)** space.

```js
const fibonacci = require('./fibonacci');

fibonacci(0); // 0
fibonacci(6); // 8
```

### Merge Sorted Arrays

The `merge_sorted_arrays.js` file contains an implementation for merging two sorted arrays into a single sorted array. It validates that both inputs are arrays, efficiently combines them using a two-pointer approach, and runs in **O(n + m)** time with **O(n + m)** space.

```js
const mergeSortedArrays = require('./merge_sorted_arrays');

mergeSortedArrays([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
```

### Insertion Sort

The `insertion_sort.js` file sorts a copy of an array of finite numbers in ascending order. It inserts each value into its correct position in the already-sorted prefix, so it is especially useful for small or nearly sorted inputs. It rejects non-arrays and arrays containing non-finite or non-number values, and leaves the original array unchanged.

Average and worst-case time complexity are **O(n²)**; best-case time for an already sorted array is **O(n)**. Space complexity is **O(n)** because the implementation returns a sorted copy.

```js
const insertionSort = require('./insertion_sort');
const assert = require('assert');

assert.deepStrictEqual(insertionSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(insertionSort([]), []);
assert.deepStrictEqual(insertionSort([1, 2, 3]), [1, 2, 3]);
```

### Queue

The `queue.js` file implements a first-in, first-out (FIFO) queue. It supports initializing from an array (which it copies), `enqueue`, `dequeue`, `peek`, `clear`, and `size` / `isEmpty` accessors. It accepts any values; attempting to dequeue or peek when empty throws a `RangeError`, and a non-array constructor argument throws a `TypeError`.

Enqueue and dequeue are **O(1) amortized**. Dequeue can take **O(n)** on an occasional compaction, which avoids shifting the entire array on every removal. Space complexity is **O(n)** for the stored elements.

```js
const Queue = require('./queue');
const assert = require('assert');

const queue = new Queue(['Ada', 'Grace']);
assert.strictEqual(queue.dequeue(), 'Ada');
queue.enqueue('Linus');
assert.strictEqual(queue.peek(), 'Grace');
assert.strictEqual(queue.size, 2);
```

Run the queue tests with `node queue.test.js`.

### Singly Linked List

The `linked_list.js` file implements a singly linked list that preserves insertion order. It copies initial values into nodes, accepts values of any type, and validates that the optional constructor argument is an array. `append` and `prepend` add values, `contains` searches by strict equality, `remove` deletes the first matching value, and `toArray` returns the values in order. The `size` and `isEmpty` accessors report the current state; `clear` empties the list.

Appending and prepending take **O(1)** time. Searching with `contains` or removing a value takes **O(n)** time, and `toArray` takes **O(n)** time. The list uses **O(n)** space for its nodes.

```js
const LinkedList = require('./linked_list');
const assert = require('assert');

const list = new LinkedList(['Ada', 'Grace']);
list.append('Linus');
assert.strictEqual(list.remove('Grace'), true);
assert.deepStrictEqual(list.toArray(), ['Ada', 'Linus']);
```

Run the linked list tests with `node linked_list.test.js`.

### Liskov Substitution Principle