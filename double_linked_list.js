class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create the new node.
    var newNode = new Node(val);
    // check if the head is null or length is zero.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if it is set the head and tail to be the newly created node.

      this.tail.next = newNode;
      // if not set the next property on the tail to be the node.
      newNode.prev = this.tail;
      // set th prvious property of the newly created node to be the tail.
      // update the tail property to be the new node at the end

      this.tail = newNode;
    }

    this.length++;
    // increment the length
    return this;
    // return the entire list
  }

  // Pop
  pop() {
    // if there is no head tail or head return undefined
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      // if the current length is one, set the head and tail to be null
      this.head = null;
      this.tail = null;
    } else {
      // take the current tail and save it to return it
      // Update the tail to be the previous node
      this.tail = poppedNode.prev;
      // take the new tail and make it next null
      this.tail.next = null;
      //
      poppedNode.prev = null;
    }
    // decrement the length by one
    this.length--;
    // return the value
    return poppedNode;
  }
  // Shift
  shift() {
    // if length = 0, or no head return undefined
    if (!this.head) return undefined;
    // Store the current head into a variable
    let oldHead = this.head;
    // if the length is one, set the head to null, the tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Set old head.next  to be the new head
      this.head = oldHead.next;
      // set the current head prev property to null
      this.head.prev = null;
      // set the old heads next property to null
      oldHead.next = null;
    }

    // decrement the length
    this.length--;
    // return the old head
    return oldHead;
  }
  // unshift
  unshift(val) {
    // create a new node with the passed in value
    let newNode = new Node(val);
    // if the length is zero, set the head and tail to be that new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise set the prev property of the head to be that new node.
      this.head.prev = newNode;
      //set the next property of the new node to be the head
      newNode.next = this.head;
      // update the head to point to the new node
      this.head = newNode;
    }
    // increment the length
    this.length++;
    // return the list
    return this;
  }
  // Get
  get(index) {
    // if -ve, or greater or equal to length return null
    let counter;
    let current;
    if (index < 0 || index >= this.length) return null;
    // if index is less than or equal to half the length of the list
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      // loop through the list starting from the head and loop through the middle
      while (counter != index) {
        current = current.next;
        counter++;
      }
    } else {
      // Otherwise if the index is greater than half the length of the list
      counter = this.length - 1;
      // Loop through the list starting from the tail and loop towards the middle
      current = this.tail;
      while (counter != index) {
        current = current.prev;
        counter--;
      }
      // Return the node once it is found
    }
    // return the found node
    return current;
  }
  // set
  set(index, val) {
    // Call get with that index
    let foundNode = this.get(index);
    //
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    } else return false;
  }
  // Insert
  insert(index, val) {
    // check if it's a valid index
    if (index < 0 || index > this.length) return false;
    // if it is equal to zero use unshift
    if (index === 0) return !!this.unshift(val);
    // if index equals the length use push
    if (index === this.length) return !!this.push(val);
    // use the get method to access the index - 1
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    // do the patching
    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    // increment length by one
    this.length++;
    return true;
  }
  // remove
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    // can use beforenode, after node
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;

    return removedNode;
  }
}

let listDouble = new DoublyLinkedList();
// console.log(listDouble.push("Love man"));
// console.log(listDouble.push(55));
// console.log(listDouble.push(5));
// console.log(listDouble.push("*Akasha"));
// console.log(listDouble.push("Asun"));
// console.log(listDouble.push("Victory"));
// console.log(listDouble.remove(0));
// console.log(listDouble);

// COMPARING SINGLY and DOUBLY LINKED LIST
/**
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n) or O(n/2)
 * Access - O(n)
 *
 * Doubly take a lot more memory
 * Finding nodes can be easier
 */
