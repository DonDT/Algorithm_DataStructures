//console.log("Solutions file DLL");
// DLL push Exercise

// Doubly linked lists are lists that have left and right connections

// The node is like a data point, so the Node class must accept a val, to assign to it,
// Next the class should instantiate the left and right connections for a DDL.

// The node shows one data point how it's supposed to look like
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// The class shows the entire array how it's to look like, it's properties.
class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push to the back
  push(val) {
    // instantiate the data point within the list, thus make a node with the node class prop.
    let newNode = new Node(val);
    // if no head create head and tail to be same node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // assign current tail to have a next, which is new node
      this.tail.next = newNode;
      // Assign the to be new tail a prev, which is previous tail
      newNode.prev = this.tail;
      // make new node, new tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // unshift => adds new items to the beginning of the array
  unshift(val) {
    // create a new node from that value
    let newNode = new Node(val);
    // if the list is empty return null
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Take the current head and give it a prev
      this.head.prev = newNode;
      // give the new head a next
      newNode.next = this.head;
      // make the new node the new head
      this.head = newNode;
      // increment the length
    }
    this.length++;
    return this;
  }
  // shift removes a node at the beginning of the list
  shift() {
    // check if the list ie empty and return undefined
    if (this.length === 0) return undefined;
    // assign the value to return
    let removedItem = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // new head
      let newHead = removedItem.next;
      // remove the previous
      newHead.prev = null;
      // assign the new head
      this.head = newHead;
      // remove the next of previous head
      removedItem.next = null;
    }
    // decrement the length
    this.length--;
    // return removed item
    return removedItem;
  }

  // Set is to change a vale, not to add or remove
  set(val, index) {
    // set the current node to be the head
    let currentNode = this.head;
    // check if index is correct
    if (index < 0 || index > this.length) return false;
    //
    if (index === 0) {
      currentNode.val = val;
      return true;
    }
    // while the counter is not equal to the value we loop till we find and update the value
    let counter = 0;

    // update till find the node
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.val = val;
    return true;
  }
  // remove, accepts an index and removes it from the list
  remove(index) {
    // is the index valid
    if (index < 0 || index >= this.length) return undefined;
    // place removed item in a place holder
    let removedItem = this.head;
    // split the loop into two, from 0 => half or from half to length
    let counter = 0;
    while (counter !== index) {
      removedItem = removedItem.next;
      counter++;
    }
    // it it was the head
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    else {
      // get the items next and previous
      let itemsPrev = removedItem.prev;
      let itemNext = removedItem.next;
      // re-assign them
      itemsPrev.next = itemNext;
      itemNext.prev = itemsPrev;
      // remove removed item likes
      removedItem.prev = null;
      removedItem.next = null;
    }
    this.length--;
    return removedItem;
  }
  // pop removes and returns the last item
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      // save item to return
      let removedItem = this.head;
      this.head = null;
      this.tail = null;

      this.length--;
      return removedItem;
    }
    let removedItem = this.tail;
    let newTail = this.tail.prev;
    this.tail = newTail;
    this.tail.next = null;
    removedItem.prev = null;

    this.length--;
    return removedItem;
  }
  // get takes an index and returns the node at that index
  get(index) {
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    let counter;
    let currentNode;
    // checks
    if (index <= this.length / 2) {
      // loop forward
      counter = 0;
      currentNode = this.head;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;

      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }
  // insert, inserts a node at a position
  insert(index, val) {
    //  create a new node
    let newNode = new Node(val);
    // if there is no item , make it the first
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    // loop to the item before the index
    let beforeNode = this.get(index - 1);
    //Get after node also
    let afterNode = beforeNode.next;
    // before node next is newNode
    beforeNode.next = newNode;
    // new node prev is before node
    newNode.prev = beforeNode;
    //
    afterNode.prev = newNode;
    newNode.next = afterNode;

    this.length++;
    return true;
  }
  // reverse
  reverse() {
    // swap the head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (var i = 0; i < this.length; i++) {
      // next variable in array
      next = node.next;
      node.next = prev; // first time it is null
      prev = node;
      node = next;
    }
    return this;
  }
}

//let myDoublyLinkedList = new DoublyLL();

// myDoublyLinkedList.push("Love");
// myDoublyLinkedList.push("Akasha");
// myDoublyLinkedList.push("Light");

// console.log(myDoublyLinkedList);
// //console.log(myDoublyLinkedList.unshift("grace"));
// console.log(myDoublyLinkedList.set("Harmony", 2));
// //console.log(myDoublyLinkedList.shift());
// console.log(myDoublyLinkedList);

// myDoublyLinkedList.push(5).push(10).push(15).push(20);
// console.log(myDoublyLinkedList);
// console.log(myDoublyLinkedList.reverse());

// console.log(myDoublyLinkedList);
