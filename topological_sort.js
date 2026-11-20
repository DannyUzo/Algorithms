/**
 * Produces a topological ordering of a directed acyclic graph (DAG).
 *
 * The graph is an adjacency-list object with string node labels and arrays of
 * neighboring labels. Every neighbor must also be a node in the graph. Kahn's
 * algorithm repeatedly emits nodes with no remaining incoming edges. It is
 * useful for ordering dependencies, such as build steps or course prerequisites.
 * A graph containing a directed cycle has no topological ordering and is rejected.
 *
 * @param {Record<string, string[]>} graph - Directed adjacency list.
 * @returns {string[]} A topological ordering of all graph nodes.
 * @throws {TypeError} If the graph, adjacency lists, or labels are invalid.
 * @throws {RangeError} If the graph contains a directed cycle.
 *
 * Time complexity: O(V + E), where V is the number of nodes and E the edges.
 * Space complexity: O(V) for indegrees, the ready queue, and the result.
 *
 * Example:
 * const topologicalSort = require('./topological_sort');
 * topologicalSort({ plan: ['build'], build: ['test'], test: [] });
 * // ['plan', 'build', 'test']
 */
function topologicalSort(graph) {
  if (graph === null || typeof graph !== 'object' || Array.isArray(graph)) {
    throw new TypeError('graph must be an adjacency-list object');
  }

  const nodes = Object.keys(graph);
  const indegree = new Map(nodes.map((node) => [node, 0]));

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
      indegree.set(neighbor, indegree.get(neighbor) + 1);
    }
  }

  const ready = nodes.filter((node) => indegree.get(node) === 0);
  const ordering = [];
  let head = 0;

  while (head < ready.length) {
    const node = ready[head];
    head += 1;
    ordering.push(node);

    for (const neighbor of graph[node]) {
      const remainingIncoming = indegree.get(neighbor) - 1;
      indegree.set(neighbor, remainingIncoming);
      if (remainingIncoming === 0) {
        ready.push(neighbor);
      }
    }
  }

  if (ordering.length !== nodes.length) {
    throw new RangeError('graph must be acyclic to have a topological ordering');
  }

  return ordering;
}

module.exports = topologicalSort;
