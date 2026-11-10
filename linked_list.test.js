const assert = require('assert');
const LinkedList = require('./linked_list');

const initialValues = ['Grace', 'Linus'];
const list = new LinkedList(initialValues);
initialValues.push('outside change');

assert.strictEqual(list.size, 2);
assert.strictEqual(list.isEmpty, false);
assert.deepStrictEqual(list.toArray(), ['Grace', 'Linus']);
assert.strictEqual(list.contains('Grace'), true);
assert.strictEqual(list.contains('Ada'), false);
assert.strictEqual(list.append('Ada'), 3);
assert.strictEqual(list.prepend('Katherine'), 4);
assert.deepStrictEqual(list.toArray(), ['Katherine', 'Grace', 'Linus', 'Ada']);

// Remove the first matching value, including head and tail cases.
assert.strictEqual(list.remove('Grace'), true);
assert.strictEqual(list.remove('Ada'), true);
assert.deepStrictEqual(list.toArray(), ['Katherine', 'Linus']);
assert.strictEqual(list.remove('missing'), false);
assert.strictEqual(list.size, 2);

const duplicates = new LinkedList([1, 1, 2]);
assert.strictEqual(duplicates.remove(1), true);
assert.deepStrictEqual(duplicates.toArray(), [1, 2]);

const emptyList = new LinkedList();
assert.strictEqual(emptyList.isEmpty, true);
assert.strictEqual(emptyList.remove('anything'), false);
emptyList.prepend('first');
assert.strictEqual(emptyList.remove('first'), true);
assert.strictEqual(emptyList.isEmpty, true);

list.clear();
assert.strictEqual(list.size, 0);
assert.strictEqual(list.isEmpty, true);
assert.deepStrictEqual(list.toArray(), []);
assert.throws(() => new LinkedList(null), TypeError);

console.log('Linked list tests passed');
