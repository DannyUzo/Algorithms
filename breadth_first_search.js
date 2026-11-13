/**
 * Traverses a directed graph in breadth-first order from a starting node.
 *
 * The graph is an adjacency-list object whose string keys are node labels and
 * whose values are arrays of neighboring labels. Each referenced neighbor must
 * also be a graph key. Breadth-first search is useful for exploring a graph by
 * distance from a start node, including finding shortest paths in unweighted
 * graphs (the returned order alone does not reconstruct those paths).
 *
 * @param {Record<string, string[]>} graph - Directed adjacency list.
 * @param {string} start - Existing node from which to begin traversal.
 * @returns {string[]} Nodes reachable from start, in breadth-first order.
 * @throws {TypeError} If the graph, adjacency lists, or labels are invalid.
 * @throws {RangeError} If start is not a node in graph.
 *
 * Time complexity: O(V + E), where V is the number of nodes and E the edges.
 * Space complexity: O(V) for validation, the queue, visited set, and result.
 *
 * Example:
 * const breadthFirstSearch = require('./breadth_first_search');
 * breadthFirstSearch({ A: ['B', 'C'], B: ['D'], C: [], D: [] }, 'A');
 * // ['A', 'B', 'C', 'D']
 */
function breadthFirstSearch(graph, start) {
  if (graph === null || typeof graph !== 'object' || Array.isArray(graph)) {
    throw new TypeError('graph must be an adjacency-list object');
  }

  if (typeof start !== 'string') {
    throw new TypeError('start must be a string node label');
  }

  if (!Object.prototype.hasOwnProperty.call(graph, start)) {
    throw new RangeError('start must be a node in graph');
  }

  const nodes = Object.keys(graph);

  for (const node of nodes) {
    const neighbors = graph[node];
    if (!Array.isArray(neighbors)) {
      throw new TypeError(`neighbors for node "${node}" must be an array`);
    }

    for (const neighbor of neighbors) {
      if (typeof neighbor !== 'string') {
        throw new TypeError('neighbor labels must be strings');
      }
      if (!Object.prototype.hasOwnProperty.call(graph, neighbor)) {
        throw new TypeError(`neighbor "${neighbor}" is not a node in graph`);
      }
    }
  }

  const visited = new Set([start]);
  const queue = [start];
  const traversal = [];
  let head = 0;

  while (head < queue.length) {
    const node = queue[head];
    head += 1;
    traversal.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return traversal;
}

module.exports = breadthFirstSearch;
