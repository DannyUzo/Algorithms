const assert = require('assert');
const topologicalSort = require('./topological_sort');

const graph = {
  plan: ['build'],
  build: ['test', 'package'],
  test: ['release'],
  package: ['release'],
  release: [],
};
const originalGraph = JSON.stringify(graph);
const order = topologicalSort(graph);
const positions = new Map(order.map((node, index) => [node, index]));

assert.strictEqual(order.length, Object.keys(graph).length);
for (const [node, neighbors] of Object.entries(graph)) {
  for (const neighbor of neighbors) {
    assert.ok(positions.get(node) < positions.get(neighbor));
  }
}
assert.strictEqual(JSON.stringify(graph), originalGraph);
assert.deepStrictEqual(topologicalSort({ solo: [] }), ['solo']);
assert.deepStrictEqual(topologicalSort({}), []);
assert.deepStrictEqual(topologicalSort({ A: [], B: [] }), ['A', 'B']);

assert.throws(() => topologicalSort(null), TypeError);
assert.throws(() => topologicalSort([]), TypeError);
assert.throws(() => topologicalSort({ A: 'B' }), TypeError);
assert.throws(() => topologicalSort({ A: [1] }), TypeError);
assert.throws(() => topologicalSort({ A: ['missing'] }), TypeError);
assert.throws(() => topologicalSort({ A: ['B'], B: ['A'] }), RangeError);
assert.throws(() => topologicalSort({ A: ['A'] }), RangeError);

console.log('Topological sort tests passed');
