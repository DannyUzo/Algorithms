const assert = require('assert');
const dijkstra = require('./dijkstra');

const graph = {
  A: { B: 4, C: 1 },
  B: { D: 1 },
  C: { B: 2, D: 5 },
  D: {},
  isolated: {},
};
const originalGraph = JSON.stringify(graph);
assert.deepStrictEqual(dijkstra(graph, 'A'), {
  A: 0,
  B: 3,
  C: 1,
  D: 4,
  isolated: Infinity,
});
assert.strictEqual(JSON.stringify(graph), originalGraph);
assert.deepStrictEqual(dijkstra({ only: {} }, 'only'), { only: 0 });
assert.deepStrictEqual(dijkstra({ A: { B: 0 }, B: {} }, 'A'), { A: 0, B: 0 });

assert.throws(() => dijkstra(null, 'A'), TypeError);
assert.throws(() => dijkstra([], 'A'), TypeError);
assert.throws(() => dijkstra({ A: [] }, 'A'), TypeError);
assert.throws(() => dijkstra({ A: { missing: 1 } }, 'A'), TypeError);
assert.throws(() => dijkstra({ A: { B: '1' }, B: {} }, 'A'), TypeError);
assert.throws(() => dijkstra({ A: { B: NaN }, B: {} }, 'A'), TypeError);
assert.throws(() => dijkstra({ A: { B: -1 }, B: {} }, 'A'), RangeError);
assert.throws(() => dijkstra({ A: {} }, 1), TypeError);
assert.throws(() => dijkstra({ A: {} }, 'missing'), RangeError);

console.log('Dijkstra tests passed');
