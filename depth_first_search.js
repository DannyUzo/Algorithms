/**
 * Traverses a directed graph in depth-first preorder from a starting node.
 *
 * The graph is an adjacency-list object whose string keys are node labels and
 * whose values are arrays of neighboring labels. Each referenced neighbor must
 * also be a graph key. Depth-first search is useful for reachability, exploring
 * connected structure, and building on with cycle detection or topological
 * sorting; traversal order alone does not find shortest paths.
 *
 * @param {Record<string, string[]>} graph - Directed adjacency list.
 * @param {string} start - Existing node from which to begin traversal.
 * @returns {string[]} Nodes reachable from start, in depth-first preorder.
 * @throws {TypeError} If the graph, adjacency lists, or labels are invalid.
 * @throws {RangeError} If start is not a node in graph.
 *
 * Time complexity: O(V + E), where V is the number of nodes and E the edges.
 * Space complexity: O(V) for validation, traversal frames, visited set, and result.
 *
 * Example:
 * const depthFirstSearch = require('./depth_first_search');
 * depthFirstSearch({ A: ['B', 'C'], B: ['D'], C: [], D: [] }, 'A');
 * // ['A', 'B', 'D', 'C']
 */
function depthFirstSearch(graph, start) {
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
  const traversal = [start];
  // Frames preserve recursive DFS order without risking call-stack overflow.
  const stack = [{ node: start, nextNeighbor: 0 }];

  while (stack.length > 0) {
    const frame = stack[stack.length - 1];
    const neighbors = graph[frame.node];

    if (frame.nextNeighbor >= neighbors.length) {
      stack.pop();
      continue;
    }

    const neighbor = neighbors[frame.nextNeighbor];
    frame.nextNeighbor += 1;

    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      traversal.push(neighbor);
      stack.push({ node: neighbor, nextNeighbor: 0 });
    }
  }

  return traversal;
}

module.exports = depthFirstSearch;
