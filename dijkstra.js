/**
 * Finds shortest-path distances from a source in a directed, weighted graph.
 *
 * The graph is an adjacency-list object whose node labels are strings and whose
 * neighbor maps associate destination labels with finite, non-negative edge
 * weights. Dijkstra's algorithm is useful for routing and other shortest-path
 * problems when all edge weights are non-negative. Unreachable nodes have an
 * Infinity distance. The input graph is not modified.
 *
 * @param {Record<string, Record<string, number>>} graph - Weighted adjacency list.
 * @param {string} start - Existing source node label.
 * @returns {Record<string, number>} Shortest distance to each graph node.
 * @throws {TypeError} If the graph, neighbor maps, labels, or weights are invalid.
 * @throws {RangeError} If a weight is negative or the source node is absent.
 *
 * Time complexity: O(V^2 + E), where V is the number of nodes and E the edges.
 * Space complexity: O(V) for distances and the visited set.
 *
 * Example:
 * const dijkstra = require('./dijkstra');
 * dijkstra({ A: { B: 4, C: 1 }, B: { D: 1 }, C: { B: 2, D: 5 }, D: {} }, 'A');
 * // { A: 0, B: 3, C: 1, D: 4 }
 */
function dijkstra(graph, start) {
  if (graph === null || typeof graph !== 'object' || Array.isArray(graph)) {
    throw new TypeError('graph must be an adjacency-list object');
  }

  const nodes = Object.keys(graph);
  if (typeof start !== 'string') {
    throw new TypeError('start must be a string node label');
  }
  if (!Object.prototype.hasOwnProperty.call(graph, start)) {
    throw new RangeError(`start node "${start}" is not in graph`);
  }

  for (const node of nodes) {
    const neighbors = graph[node];
    if (neighbors === null || typeof neighbors !== 'object' || Array.isArray(neighbors)) {
      throw new TypeError(`neighbors for node "${node}" must be an object`);
    }

    for (const [neighbor, weight] of Object.entries(neighbors)) {
      if (!Object.prototype.hasOwnProperty.call(graph, neighbor)) {
        throw new TypeError(`neighbor "${neighbor}" is not a node in graph`);
      }
      if (typeof weight !== 'number' || !Number.isFinite(weight)) {
        throw new TypeError(`weight from "${node}" to "${neighbor}" must be finite`);
      }
      if (weight < 0) {
        throw new RangeError('edge weights must be non-negative');
      }
    }
  }

  const distances = Object.fromEntries(nodes.map((node) => [node, Infinity]));
  const visited = new Set();
  distances[start] = 0;

  while (visited.size < nodes.length) {
    let nearest = null;
    let nearestDistance = Infinity;

    for (const node of nodes) {
      if (!visited.has(node) && distances[node] < nearestDistance) {
        nearest = node;
        nearestDistance = distances[node];
      }
    }

    if (nearest === null) break;
    visited.add(nearest);

    for (const [neighbor, weight] of Object.entries(graph[nearest])) {
      const candidate = nearestDistance + weight;
      if (candidate < distances[neighbor]) {
        distances[neighbor] = candidate;
      }
    }
  }

  return distances;
}

module.exports = dijkstra;
