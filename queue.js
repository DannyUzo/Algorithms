/**
 * A FIFO queue backed by an array with a moving head index.
 *
 * Enqueue and dequeue are amortized O(1). When consumed entries occupy at
 * least half the backing array (and there are at least 64 of them), dequeue
 * compacts the array; that occasional operation is O(n). The queue uses O(n)
 * space for its elements. The constructor copies the input array.
 *
 * @param {Array<*>} initialItems - Optional values to enqueue in FIFO order.
 * @throws {TypeError} If initialItems is not an array.
 *
 * Example:
 * const Queue = require('./queue');
 * const queue = new Queue(['first', 'second']);
 * queue.dequeue(); // 'first'
 */
class Queue {
  constructor(initialItems = []) {
    if (!Array.isArray(initialItems)) {
      throw new TypeError('initialItems must be an array');
    }

    this._items = initialItems.slice();
    this._head = 0;
  }

  get size() {
    return this._items.length - this._head;
  }

  get isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    this._items.push(value);
    return this.size;
  }

  dequeue() {
    if (this.isEmpty) {
      throw new RangeError('Cannot dequeue from an empty queue');
    }

    const value = this._items[this._head];
    this._head += 1;

    // Avoid shifting the array on every dequeue. Compact occasionally so
    // consumed entries do not accumulate indefinitely.
    if (this._head >= 64 && this._head * 2 >= this._items.length) {
      this._items = this._items.slice(this._head);
      this._head = 0;
    }

    return value;
  }

  peek() {
    if (this.isEmpty) {
      throw new RangeError('Cannot peek at an empty queue');
    }

    return this._items[this._head];
  }

  clear() {
    this._items = [];
    this._head = 0;
  }
}

module.exports = Queue;
