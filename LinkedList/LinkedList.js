class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head === null) {
      const node = new Node(data);
      this.head = node;
      return;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
      return;
    }
  }

  traverse() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current !== null) {
      process.stdout.write(current.data + " ");
      current = current.next;
    }
  }

  
}

const list = new LinkedList();

list.add(5);
list.add(10);
list.add(4);
list.add(17);
list.add(-3);

console.log(list.traverse());
