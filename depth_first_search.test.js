const assert = require('assert');
const depthFirstSearch = require('./depth_first_search');

const graph = {
  A: ['B', 'C'],
  B: ['C', 'D'],
  C: ['D'],
  D: [],
  unreachable: [],
};

assert.deepStrictEqual(depthFirstSearch(graph, 'A'), ['A', 'B', 'C', 'D']);
assert.deepStrictEqual(depthFirstSearch({ A: ['B', 'C'], B: ['D'], C: [], D: [] }, 'A'), ['A', 'B', 'D', 'C']);
assert.deepStrictEqual(depthFirstSearch({ solo: [] }, 'solo'), ['solo']);
assert.deepStrictEqual(depthFirstSearch({ A: ['B'], B: ['A'] }, 'A'), ['A', 'B']);
assert.deepStrictEqual(depthFirstSearch({ A: [], B: [] }, 'B'), ['B']);

assert.throws(() => depthFirstSearch(null, 'A'), TypeError);
assert.throws(() => depthFirstSearch([], 'A'), TypeError);
assert.throws(() => depthFirstSearch({ A: 'B' }, 'A'), TypeError);
assert.throws(() => depthFirstSearch({ A: [1] }, 'A'), TypeError);
assert.throws(() => depthFirstSearch({ A: ['missing'] }, 'A'), TypeError);
assert.throws(() => depthFirstSearch({ A: [] }, 1), TypeError);
assert.throws(() => depthFirstSearch({ A: [] }, 'missing'), RangeError);

console.log('Depth-first search tests passed');
