// Djiksra Algorithm
// Finds the shortest path between distances

// For this we need to write a weighted graph

// Steps

// 1) Say we want to visit A,
/**
 * We always pick the node with the smallest known distance from A, and visit that first.
 * Once we've moved to that node, we look at each of it's neighbors.
 * For each neighboring node, we calculate the distance by swimming the total edges, that leads to the node
 * we're checking from the starting node.
 * If the new total distance to a node is less than the previous total, we store the new shorter distance for
 * that node.
 */

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

// class Node {
//   constructor(val, priority) {
//     this.val = val;
//     this.priority = priority;
//   }
// }

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    // newly inserted item index
    let elIndex = this.values.length - 1;
    //The new inserted item
    const element = this.values[elIndex];
    //We stop at zero
    while (elIndex > 0) {
      // elIndex of the parent element
      let parentIdx = Math.floor((elIndex - 1) / 2);
      // Compare the parent element to the newly inserted
      let parent = this.values[parentIdx];
      // does it needs to be swapped
      /** Here to get min or max priority queue, change this sign <= to >= , now it is max */
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[elIndex] = parent;
      // update elIndex
      elIndex = parentIdx;
    }
  }
  // Remove
  dequeue() {
    // swap the first value with the last value.
    const max = this.values[0];
    // pop from the values property, so you can return the value at the end.
    const end = this.values.pop();
    // make sure there are more than one element
    if (this.values.length > 0) {
      this.values[0] = end;
      // have the new root sink to the correct spot.
      this.sinkDown();
    }
    return max;
    // return the max
  }
  sinkDown() {
    // we start at the very begining element
    let index = 0;
    //find it's children
    let length = this.values.length;
    const element = this.values[0];

    // lets find the children index, 2x parentIndx + 1, 2x parentIndx + 2
    while (true) {
      // left child index
      let leftChildIndx = 2 * index + 1;
      // right child index
      let rightChildIndex = 2 * index + 2;
      // initialise left and right
      let leftChild, rightChild;
      // set a variable that breaks the loop if there was no swap
      let swap = null;
      // Make sure the left and right child indexes are not out of bounds
      if (leftChildIndx < length) {
        leftChild = this.values[leftChildIndx];
        // we compare it with element
        /** Here to get min or max priority queue, change this sign <= to >= , now it is max */
        if (leftChild.priority < element.priority) {
          swap = leftChildIndx;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        /** Here to get min or max priority queue, change this sign <= to >= , now it is max */

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      // do the swap
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      // reset index, the child index we swap to now becomes the new parent.
      index = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Djikstra(start, finish) {
    // make a new priority queue
    const nodes = new PriorityQueue();
    // previous stores the previous shortest path to that node
    const previous = {};
    // distances holds the vertexes and the distances
    const distances = {};
    // build up initial state, distances

    // return at end
    let path = [];
    //
    let smallest;
    //
    for (let vertex in this.adjacencyList) {
      // for the vertex being searched we set the initial distance to zero and the others to infinity.
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there are something to visit
    while (nodes.values.length) {
      // deques gives us the smallest priority, which is the shortest distance
      smallest = nodes.dequeue().val;
      // if smallest equals finish, we are done and we need to build path to return
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // If not, we loop through each neighbor of the adjacency list for that vertex.
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node, total distance from original vertex
          let candidate = distances[smallest] + nextNode.weight;
          //
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enquee in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

// let wgc = new WeightedGraph();

// wgc.addVertex("A");
// wgc.addVertex("B");
// wgc.addVertex("C");
// wgc.addVertex("D");
// wgc.addVertex("E");
// wgc.addVertex("F");

// wgc.addEdge("A", "B", 4);
// wgc.addEdge("A", "C", 3);
// wgc.addEdge("B", "E", 3);
// wgc.addEdge("C", "D", 2);
// wgc.addEdge("C", "F", 4);
// wgc.addEdge("D", "E", 3);
// wgc.addEdge("D", "F", 1);
// wgc.addEdge("E", "F", 1);

// console.log(wgc.Djikstra("A", "F"));
