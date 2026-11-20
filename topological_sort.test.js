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
assert.deepStrictEqual(topologicalSort({ A: ['B'], B: ['A'] }).length, 0);
