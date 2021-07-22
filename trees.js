// TREES

/**
 * A data structure that consists of nodes in a parent/child relationship
 * root => the topmost node in a tree
 * Child => a node directly connected to another node when moving away from the root
 * Parent the converse notion of a child
 * siblings => a group of nodes with the same parent
 * leave => a node with no children
 * edge => the connection between one node and the other
 */

//USE CASES
// => HTML DOM
// => Network Routing
// => Abstract Syntax Tree
// => Artificial Intelligence
// => Folders in Operating System
// => JSON parsed data

// KINGS OF TREES
/**
 * Trees => Binary trees => Binary searc tree
 * Binary search trees
 * Each node from the parent can have at most 2 children
 * Data stored that has a way to order or compare it
 *
 * Every node to the left of the parent node is always less than the parent.
 * Every node to the right of th parnt node is always greater than the parent
 */

// BINARY SEARCH TREES

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // inserting a node
  insert(value) {
    // create a new node
    let newNode = new Node(value);
    // is there a root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // is our value less than the root, if so, is there a left
    // if not it becomes the new left
    let current = this.root;
    // this while loop always takes the current value which is being updated and check
    while (true) {
      // if value equals current.value avoid infinite loop or put a frequency counter
      if (value === current.value) return undefined;
      // check the left
      if (value < current.value) {
        // Is there no left at this current
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // capture the current left value for future comparison, and call the loop again
        current = current.left;
        // is the value greater than current
      } else if (value > current.value) {
        // is there no right at this current
        if (current.right === null) {
          // place the node there
          current.right = newNode;
          return this;
          // else upodate the current and call the loop again
        } else current = current.right;
      }
    }
  }
  // find
  find(value) {
    // if the tree is empty
    if (this.root === null) return false;
    // start with the current
    let current = this.root;
    // check if the current is the value
    if (current === value) return current;
    // while true, until I break out
    while (true) {
      // if value is current return it
      if (value == current.value) return current;
      // checking the left
      if (value < current.value) {
        // if there is no more left, value not found return
        if (current.left === null) return false;

        // assign the new current to re-loop
        current = current.left;
      } else if (value > current.value) {
        // if there is no right at this current return false
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }
  // BREADTH FIRST SEARCH
  breadthFirstSearch() {
    // data we are to return
    let node = this.root;
    let data = [];
    // Queue holds the data from the tree
    let queue = [];
    queue.push(node);
    // while there is something in the queue
    while (queue.length) {
      node = queue.shift();
      // push the node to data
      data.push(node.value);
      // check if there is a left
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // DEAPTH FIRST SEARCH
  // Pre-order
  deapthFirstSearchPreOrder() {
    // make an array that saves all the values
    let data = [];
    // initialize the root variable
    let current = this.root;
    // helper traverse function
    function traverse(node) {
      // Push the actual node
      data.push(node.value);
      // If there is a right push it also
      if (node.left) traverse(node.left);
      // if there is a left push it also
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  //Post order => The root is the last thing we add, all the children comes first before the parent
  deapthFirstSearchPostOrder() {
    // Make an array that saves the values
    let data = [];
    // initialize the root node
    let current = this.root;
    // helper function to call recursively left and right
    function traverse(node) {
      // if there is a right push it also through recursion
      if (node.left) traverse(node.left);
      //
      if (node.right) traverse(node.right);
      // push the actual node
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  // In-Order
  deapthFirstSearchInOrder() {
    // Make a variable to save the values
    let data = [];
    // initialize the current
    let current = this.root;
    // Helper recursive function
    function traverse(node) {
      // if there is a left push it recursively
      if (node.left) traverse(node.left);
      //
      data.push(node.value);

      // If there is a right now push it
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

// TREE Traversal
// Breath first search => accros
// Depth first search => down and up, 1) in-order, 2) pre-order, 3) post-order

// BREADTH First Search BFS
// Horizontally look at evry parent before looking at child, accros

// Steps => FIFO
// Use a queue or array

// DEAPTH FIRST SEARCH
// Ther order differs
// Pre-order
/**
 * Create a variable to retun the values visited
 * store
 */

//const tree = new BinarySearchTree();

// console.log(tree.insert(10));
// console.log(tree.insert(5));
// console.log(tree.insert(2));
// console.log(tree.insert(15));
// console.log(tree.insert(13));
// console.log(tree.insert(16));
// console.log(tree.insert(1));
// console.log(tree.breadthFirstSearch());
// console.log(tree.deapthFirstSearchPreOrder());
// console.log(tree.deapthFirstSearchPostOrder());
// console.log(tree.deapthFirstSearchInOrder());
// console.log(tree);
// console.log(tree.find(15));

// BIG O of Binary search trees

/**
 * As the number of items in the trees double we only make one more search
 * a one side tree with ech sibling greater or less than, it would be O(n)
 * insertion - O(log n)
 * searching - O(log n)
 */

// WHICH TO USE WHAT
/**
 * breadth vs deapth
 * Time complexity of both is the same since we are visiting every node one time.
 * Space complexity
 * Depth first uses less space, compared to breadth that stores every node. Depth first stores just one thing at a time in memory.
 * In order, returns an array in increasing order.
 * pre-order, clone a tree to save it. it's such that the tree can be re-constructed from it
 */
