// GRAPHS

/**
 * A graph is collection of nodes and connections between those nodes
 * What matters is the connections between graphs
 * There is no parent, starting node, they are treated equally
 *
 * TYPES
 * Vertex => This is a node, one of the circles
 * Edge =>  is the connection between nodes
 *
 * Undirected graph => There are two way connection, there is no direction btw vertexes.
 *
 * Directed graph is often represented with arrows. there is a direction between the edges, single or two way.
 *
 * Weighted graph => when we assign a value to the edges then it becomes a weighted graph.
 * UN-weighted graph => no value for the connections.
 */

// The Adjeccency Matrix => here the data is stored in a 2 dimentionsla matrix.
// The Adjacency List => here the data is stored in a two dimentional array list.

/**
 * Difference and Big O
 * V - number of vertices
 * E - number of edges
 *
 * Operation  | Adjacency Lis | Adjacency Matrix
 * Add vertex       O(1)                O(| V^2)
 * Add edge         O(1)                O(1)
 * Remove vertex    O(|V| + |E|)        O(| V^2)
 * Remove Edge      O(|E|)              O(1)
 * Query            O(|V| + |E|)        O(1)
 * Storage          O(|V| + |E|)        O(| V^2)
 *
 * Adjacency List              | Adjacency Matrix
 * can take up less space        Takes up more space in sparse graphs
 * in sparse graph
 *
 * Fater to iterate over          Slower to iterate over all edges
 * all edges.
 *
 * Can be slower to lookup        Faster to look up specific edges
 * specific edge.
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // addVertex accepts a name of a vertex
  // It adds a key to the adjacency list with the name of the vertex set as key, and value an empty array

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }
  // addEdge
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }
  // REmove edge
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (i) => i !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (i) => i !== vertex1
    );
    return this;
  }
  // Removing a vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
  depthFirstRecursive(start) {
    // We have instantiate this.adjacencyList, since a normal function has it's own this
    const adjacencyList = this.adjacencyList;
    // create  a list to store the end result
    const result = [];
    // create an object to store the visited
    const visited = {};
    // Create a helper function which accepts a vertex
    (function dfs(vertex) {
      if (!vertex) return null;
      //Add the vertex into results and into visited
      visited[vertex] = true;
      result.push(vertex);
      // loop over all the values in that vertex, if any has not been visited recursively call the helper func
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    // it should return early if already visited
    return result;
  }

  // Iretatively depth first, this sort of works from the end of the adjecency list
  depthFirstiterative(start) {
    const stack = [start];
    const visited = [];
    const result = [];
    visited[stack] = true;
    // initialize the current vertex
    let currentVertex;
    while (stack.length) {
      // mark vertex we are iteratin over
      currentVertex = stack.pop();
      // Push the current vertex into our result array to be returned
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // BeadthFirstSearch
  beadthFirstSearch(start) {
    // create a queue
    const queue = [start];
    // create an array of visited nodes
    const visited = {};
    // create a result to return
    const result = [];
    // Mark the first vertex as visited
    visited[start] = true;
    // initialize the current vertex
    let currentVertex;

    //
    while (queue.length) {
      // remove the first node
      currentVertex = queue.shift();
      // visit the node
      result.push(currentVertex);
      // go to all of it's neighbors
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

// let graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");

// console.log(graph.depthFirstiterative("A"));
// console.log(graph.beadthFirstSearch("A"));

// DEPTH First Traversal => use a stack push and pop

// Breadth first traversal => use a queue, push and shift

// slice.reverse() => what is this
