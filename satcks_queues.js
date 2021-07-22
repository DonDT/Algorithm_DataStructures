// STACK and Queues
// LIFO data structure
// The last element added to the stack, will be the first element removed from the stack

// similar to the call stack
// Stacks are use to manage function invocation
// undo and redo actions
// History object in the browser
// Trees and Graph use a stack and queues

// FIRST APPROACH

// Javascript Array
// Using push(), and pop() only in an array makes it function like a stack.
/** push() adds from the end, pop(), removes from the end, so the start would be to the right the end  */

// OR

/**
 * unshift('') adds from the left, shift() removes from the left
 */
// unshift to add, and shift to remove only

// As far as big O notation time complexity, adding and removing from the beginning is inefficient, so
// push and pop are better

// THERE is more than one way of implementing stacks using the LIFO method.

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;

      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = removedNode.next;
    this.size--;
    return removedNode.value;
  }
}

// let stack = new Stack();

// console.log(stack.push("Akasha"));
// console.log(stack.push("Asun"));
// console.log(stack.push("Germain"));
// console.log(stack.pop());

// console.log(stack);

// BIG O of stacks
/**
 * insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access  O(n)
 */

// QUEUES

/**
 * FIFO
 * You add and remove data, instead of LIFO in stacks, it is FIFO
 * Fist added, first removed
 *
 * Waiting to join a game
 * Background task, like downloading file or uploading
 * print queue / task processing
 */

// USING ARRAYS

/**
 * Add to the end of the array with push()
 * to remove from the beginning with shift()
 *
 * OR
 *
 * Add from the beginning and removed from the end
 *
 * unshift() from the start, pop() from the end
 *
 * // avoid the beginning with arrays!
 */

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // enqueue
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let oldHead = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      //let oldNext = this.first;
      let newNext = this.first.next;
      this.first = newNext;
      //oldNext.next = null;
    }
    this.size--;
    return oldHead;
  }
}

// let queue = new Queue();

// console.log(queue.enqueue("Ease"));
// console.log(queue.enqueue("Love"));
// console.log(queue.enqueue("Light"));
// console.log(queue.enqueue("Life"));
// console.log(queue.dequeue());
// console.log(queue);

// BIG O QUEUE
/**
 * Insertion O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */
