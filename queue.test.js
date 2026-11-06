const assert = require('assert');
const Queue = require('./queue');

const initialItems = ['first', 'second'];
const queue = new Queue(initialItems);
initialItems.push('outside change');

assert.strictEqual(queue.size, 2);
assert.strictEqual(queue.isEmpty, false);
assert.strictEqual(queue.peek(), 'first');
assert.strictEqual(queue.dequeue(), 'first');
assert.strictEqual(queue.enqueue('third'), 2);
assert.strictEqual(queue.dequeue(), 'second');
assert.strictEqual(queue.dequeue(), 'third');
assert.strictEqual(queue.isEmpty, true);
assert.throws(() => queue.dequeue(), RangeError);
assert.throws(() => queue.peek(), RangeError);
assert.throws(() => new Queue(null), TypeError);

// Exercise the occasional backing-array compaction while preserving FIFO order.
const manyItems = Array.from({ length: 200 }, (_, index) => index);
const compactingQueue = new Queue(manyItems);
for (let index = 0; index < 150; index += 1) {
  assert.strictEqual(compactingQueue.dequeue(), index);
}
assert.strictEqual(compactingQueue.size, 50);
assert.strictEqual(compactingQueue.peek(), 150);

compactingQueue.clear();
assert.strictEqual(compactingQueue.size, 0);
assert.strictEqual(compactingQueue.isEmpty, true);

console.log('Queue tests passed');
