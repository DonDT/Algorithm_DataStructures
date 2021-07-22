// HEAPS => a kind of trees
/**
 * Each node should have at most two children. There is no left or right order, just that each parent is greater than the children. The left and right must be smaller than the parent, in a max binary heap. Min is the reverse. It always takes up the least amount of space possible. So left and right are filled before a new node is created.
 *
 * No implied ordering between siblings
 *
 * Similar to a binary search tree, but with some differnt rules
 * In a max binary heap, parent nodes are always larger than the child nodes, in a min binary heap, parent nodes are always smaller than the child nodes
 *
 * Heaps => are often used to implement priority queue, which is a very commonly used data structure.
 * They are also used quite well, with graph traversal algorithms.
 */

/**
 * Max Binary heap
 * the left is added before the right.
 *
 * For any index n in an array, the left child is stored at 2n + 1
 * and the right child is stored at 2n + 2
 *
 * This can be worked backwards also Math.floor((n - 1)/2)
 */

// Removing

/**
 * We remove the root from the heap
 *
 * First we remove the root, and replace it with the last item in the array, just temporarily as a place holder.
 * Then we take it anc compare it with the children, and re-organise
 *
 * Max binary heap removing the max
 * Min binary heap removing the min
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
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
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[elIndex] = parent;
      // update elIndex
      elIndex = parentIdx;
    }
  }
  // Remove
  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIndx;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

// let heap = new MaxBinaryHeap();

// heap.insert(55);
// heap.insert(1);
// heap.insert(45);
// heap.insert(145);
// console.log(heap.extractMax());

// console.log(heap);

// PRIORITY QUEUE
/**
 * Data structure where each  node, element has a priority associated with it.
 * They are seperate from queue, can be implemented with an array or list, just that they are slower
 *
 * This is like a heap, min or max, but the various levels denotes priority.
 * First we add to the heap and then locate it's based on it's priority level.
 *
 * Same as max or min binary heap, when we extract the max item, we replace with the last item, and have it sync down to the correct spot
 */
