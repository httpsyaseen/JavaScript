class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      let current = new Node(value);
      this.head = current;
      return;
    }

    let newNode = new Node(value);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }

  show() {
    let current = this.head;
    while (current) {
      console.log(`${current.value}-->`);
      current = current.next;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let current = this.head;
    let prev;

    while (current.value !== value) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(0);
list.remove(30);
list.show();
