/**
 * A singly linked list that preserves insertion order.
 *
 * Append and prepend take O(1) time. Searching for or removing a value takes
 * O(n) time; converting to an array takes O(n) time. The list uses O(n) space
 * for its nodes. The constructor copies the supplied array's values into nodes.
 * Values are compared using strict equality (===).
 *
 * @param {Array<*>} initialValues - Optional values to add in list order.
 * @throws {TypeError} If initialValues is not an array.
 *
 * Example:
 * const LinkedList = require('./linked_list');
 * const list = new LinkedList(['Ada', 'Grace']);
 * list.append('Linus');
 * list.remove('Grace');
 * list.toArray(); // ['Ada', 'Linus']
 */
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(initialValues = []) {
    if (!Array.isArray(initialValues)) {
      throw new TypeError('initialValues must be an array');
    }

    this._head = null;
    this._tail = null;
    this._size = 0;

    for (const value of initialValues) {
      this.append(value);
    }
  }

  get size() {
    return this._size;
  }

  get isEmpty() {
    return this._size === 0;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (this.isEmpty) {
      this._head = node;
    } else {
      this._tail.next = node;
    }

    this._tail = node;
    this._size += 1;
    return this._size;
  }

  prepend(value) {
    const node = new LinkedListNode(value);
    node.next = this._head;
    this._head = node;

    if (this._tail === null) {
      this._tail = node;
    }

    this._size += 1;
    return this._size;
  }

  contains(value) {
    let current = this._head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  remove(value) {
    let previous = null;
    let current = this._head;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      return false;
    }

    if (previous === null) {
      this._head = current.next;
    } else {
      previous.next = current.next;
    }

    if (current === this._tail) {
      this._tail = previous;
    }

    this._size -= 1;
    return true;
  }

  toArray() {
    const values = [];
    let current = this._head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
}

module.exports = LinkedList;
