const assert = require('assert');
const breadthFirstSearch = require('./breadth_first_search');

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
  unreachable: [],
};

assert.deepStrictEqual(breadthFirstSearch(graph, 'A'), ['A', 'B', 'C', 'D', 'E', 'F']);
assert.deepStrictEqual(breadthFirstSearch({ solo: [] }, 'solo'), ['solo']);
assert.deepStrictEqual(breadthFirstSearch({ A: ['B'], B: ['A'] }, 'A'), ['A', 'B']);
assert.deepStrictEqual(breadthFirstSearch({ A: [], B: [] }, 'B'), ['B']);

assert.throws(() => breadthFirstSearch(null, 'A'), TypeError);
assert.throws(() => breadthFirstSearch([], 'A'), TypeError);
assert.throws(() => breadthFirstSearch({ A: 'B' }, 'A'), TypeError);
assert.throws(() => breadthFirstSearch({ A: [1] }, 'A'), TypeError);
assert.throws(() => breadthFirstSearch({ A: ['missing'] }, 'A'), TypeError);
assert.throws(() => breadthFirstSearch({ A: [] }, 1), TypeError);
assert.throws(() => breadthFirstSearch({ A: [] }, 'missing'), RangeError);

console.log('Breadth-first search tests passed');
