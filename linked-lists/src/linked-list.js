class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  append(data) {
    let oldTail = this.tail();
    let newTail = new Node(data, null);
    oldTail.nextNode = newTail;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  getAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    const prev = this.getAtIndex(index - 1);
    if (prev == null) {
      return null;
    }

    prev.next = new Node(value, prev.next);
    this.length++;
  }

  toString() {
    let output = ``;
    let current = this.head;
    while (current) {
      let output = `${output}${current.value} -> `;
      current = current.nextNode;
    }
    console.log(`${output} null`);
  }
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

//Helper function
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.prepend(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
