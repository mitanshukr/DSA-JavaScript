class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const addNode = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else {
            return addNode(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else {
            return addNode(node.right);
          }
        } else {
          return null;
        }
      };
      return addNode(node);
    }
  }

  search(data) {
    const node = this.root;
    if (node === null) {
      return false;
    } else {
      const searchData = (node) => {
        if (data === node.data) {
          return true;
        } else if (data < node.data) {
          if (node.left === null) return false;
          return searchData(node.left);
        } else if (data > node.data) {
          if (node.right === null) return false;
          return searchData(node.right);
        }
      };
      return searchData(node);
    }
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }
    let h_left = this.height(node.left);
    let h_right = this.height(node.right);

    return Math.max(h_left, h_right) + 1;
  }

  inOrderTraversal(node = this.root) {
    if (node === null) {
      return null;
    }
    this.inOrderTraversal(node.left);
    process.stdout.write(node.data + " ");
    this.inOrderTraversal(node.right);
  }

  preOrderTraversal(node = this.root) {
    if (node === null) {
      return null;
    }
    process.stdout.write(node.data + " ");
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node = this.root) {
    if (node === null) {
      return null;
    }
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    process.stdout.write(node.data + " ");
  }

  //Queue Implementation
  levelOrderTraversal(node = this.root) {
    if (node === null) {
      return null;
    }
    const queue = [node];

    while (queue.length > 0) {
      const current = queue.pop();
      process.stdout.write(current.data + " ");

      if (current.left !== null) queue.unshift(current.left);
      if (current.right !== null) queue.unshift(current.right);
    }
  }

  //Stack Implementation - PreOrder
  depthFirstSearch(node = this.root) {
    const stack = [node];

    while (stack.length > 0) {
      const current = stack.pop();
      process.stdout.write(current.data + " ");

      if (current.right !== null) stack.push(current.right);
      if (current.left !== null) stack.push(current.left);
    }
  }

  findMin() {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

const tree = new BST();

// tree.add(0);
tree.add(10);
tree.add(5);
tree.add(12);
tree.add(6);
tree.add(14);
tree.add(1);
tree.add(8);
tree.add(11);

// console.log(tree.findMin());
// console.log(tree.findMax());

tree.inOrderTraversal();
console.log("");
tree.preOrderTraversal();
console.log("");
tree.postOrderTraversal();
console.log("");

console.log("---------------");
tree.levelOrderTraversal();
console.log("");
tree.depthFirstSearch();
console.log("");

console.log(tree.search(6)); //true
console.log(tree.search(-13)); //false

console.log(tree.height());
