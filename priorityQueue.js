// PRIORITY QUEUE
/**
 * Data structure where each  node, element has a priority associated with it.
 * They are seperate from queue, can be implemented with an array or list, just that they are slower
 *
 * This is like a heap, min or max, but the various levels denotes priority.
 * First we add to the heap and then locate it's based on it's priority level.
 *
 * Same as max or min binary heap, when we extract the max item, we replace with the last item, and have it sync down to the correct spot
 *
 * Each node has a min priority property
 */

// First write a min Binary Heap - lower number means higher priority.
// Each node has a val and a priority, use the priority to build the heap.
// Enqueue method accepts a value and property, makes a new node and puts it in the right spot based off of it's priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.

// When you enqueue or dequeue, you compare the priority level
// When we removes, we swap with the last and sink down.

// class Node {
//   constructor(val, priority) {
//     this.val = val;
//     this.priority = priority;
//   }
// }

class PriorityQueue_ {
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
      if (element.priority <= parent.priority) break;
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
        if (leftChild.priority > element.priority) {
          swap = leftChildIndx;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        /** Here to get min or max priority queue, change this sign <= to >= , now it is max */

        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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

// let ER = new PriorityQueue_();

// ER.enqueue("common life", 1);
// ER.enqueue("Gun shot love", 5);
// ER.enqueue("High joy", 2);

// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());

// BIG O NOTATION
/**
 * Insertion and removal => O(log n) if we have 16 elements, 4 comparision. 2 to what power gives us 16
 * As n grows the number of items, 2 to what power would give us n ? The power is the number of comparisions
 * thus it's a log n relationship
 * search O(n)
 */
