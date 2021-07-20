// DATA STRUCTURES

// Data structures are collections of values, the relationship amongst them, and the functions or operations  // that can be applied to the data.

// A class is a blueprint for creating objects with pre-defined properties and methods.
// this refers to the individual instantiation of the class.

// definig methods as static, cannot be called through the class instantiation, but the class itself.

// SINGLY LINKED LIST

// WHat is a LINKED list, it is an array of items, that can hold any sort of data.
// It contains, a head, a tail and a length property.
// linked lists consists of nodes, and each node has a value and a pointer to another node or null.
// There is no index, we start from the first and the next and the next

// head [4 =>,5 =>, 8=>, 3=>, 89] tail, length = 5.
// Singly linked list means each element is only connected one dimentionally to the next.
// Doubly linked list has a connection pointing back to the previous node.

class Node {
  // We need the node because, it stores a piece of data, each item in the list is a node
  constructor(val) {
    // this data is called val
    this.val = val;
    // then it stores a reference to the next val or node
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // first create a new node
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // first add to the current tail
      this.tail.next = newNode;
      // move the tail marker over
      this.tail = newNode;
    }
    this.length++;
    // reture the whole list
    return this;
  }

  pop() {
    // return undefined if no items
    if (!this.head) return undefined;
    // Loop through the list until you reach the tail, keep track of each item, to take note of the second to // last item

    // we need two items we move through, one would be is this the new tail, if not we bring the new tail pointer
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      // new tail is always one step behind
      newTail = current;
      // current is one ahead
      current = current.next;
    }
    // move the tail
    this.tail = newTail;
    // set the next to be null
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Shift
  shift() {
    // if there no nodes return undefined
    if (!this.head) return undefined;
    // store the current head property in a variable
    let currentHead = this.head;
    // Set the head property to be the current heads next property
    this.head = currentHead.next;
    // decrement by one.
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    // return the value of the node removed.
    return currentHead;
  }
  // unshift, adding a new node to the beginning of the list
  unshift(val) {
    // create a new node using the value passed
    let newNode = new Node(val);
    // if no head property on the list, set the head and tail to be the newly created node.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // newly created node next to be the current head property
      newNode.next = this.head;
      // set the head property on the list to be that newly created node
      this.head = newNode;
    }
    // increment the length of the list by 1
    this.length++;
    return this;
  }
  // get a node at a particular index
  get(index) {
    // return null if index is >= this.length
    if (index >= this.length || index < 0) return undefined;
    // loop through untill index is reached and return node at that index.
    // counter keeps track of items index
    let counter = 0;
    // current keeps track of item
    let current = this.head;

    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set
  // set would accept a position and the value to assign to it
  // if the node is not found return false, else return true
  set(index, val) {
    // check the incoming values
    if (!index || !val) return false;
    // counter to trace the value according to index
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // insert creates a new node before some index passed and connect it to the node before and after

  insert(index, val) {
    // if the index is less than zero or greater than length, return false
    if (index < 0 || index > this.length) return false;
    // if the index is the same as the length, just call the push method and push it to the end.
    if (index === this.length) {
      // or !!
      this.push(val);
      return true;
    }
    // if index = 0, use the unshift method
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    // use the get method to access the node before index to set it's next node.
    let newNode = new Node(val);
    let previous = this.get(index - 1);
    // set the next property on that node to be the new node.
    let temp = previous.next;
    // set the next property on the new node to be the previous next.
    previous.next = newNode;
    newNode.next = temp;
    // increment the length
    this.length++;
    // return true
    return true;
  }

  // Remove
  remove(index) {
    // if the index is -ve or greater than the length, return undefined
    if (index < 0 || index >= this.length) return null;
    // if the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();
    // if the index = 0 use the pop
    if (index === 0) return this.shift();
    // otherwise use the get to access the node at the index -a
    let preNode = this.get(index - 1);
    let removed = preNode.next;
    // set the next property on that node to be the next of the next node
    preNode.next = removed.next;
    // decrement the length
    this.length--;
    // return the value of the returned node
    return removed;
  }

  // Reverse
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

const list = new SinglyLinkedList();
// list.push("Hello ");
// list.push("What up");
// list.push("say What!!!");

// console.log(list);
// console.log(list.reverse());
// console.log(list);

// insertion O(1)
// removal it depends O(1) or O(n)
// Searching O(n)
// Access O(n)

// deletion and insertion at the beginning, linked lists are better
