console.log("SLL Solutions");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList_ {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a new node
    let newNode = new Node(val);
    // if no itmes, make new node head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    // increment lenth return array
    this.length++;
    return this;
  }
  // get an item based on an index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    // assign the current item
    let counter = 0;
    let currentItem = this.head;
    while (counter !== index) {
      currentItem = currentItem.next;
      counter++;
    }
    return currentItem;
  }
  //pop, removes the last node
  pop() {
    // if no items return undefined
    if (!this.head) return null;
    let removedNode;
    if (this.length === 1) {
      removedNode = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      // assign node to be removed
      removedNode = this.tail;
      // get the item before the tail
      let newTail = this.get(this.length - 2);
      // Mkae it the new tail and make it's next null
      newTail.next = null;
      this.tail = newTail;
    }

    // decrement the length and return
    this.length--;
    return removedNode;
  }
}

let sll = new SinglyLinkedList_();

sll.push("Light");
sll.push("Grace");
sll.push("Ease");

console.log(sll.pop());
console.log(sll.pop());
console.log(sll.pop());
console.log(sll.pop());
console.log(sll.pop());
console.log(sll);
