class Node {
  constructor(num) {
    this.data = num;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
  constructor(list) {
    this.root = this.buildTree(list, 0, list.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) {
      return null;
    }
    let middle = parseInt((start + end) / 2);
    let node = new Node(array[middle]);
    node.leftChild = this.buildTree(array, start, middle - 1);
    node.rightChild = this.buildTree(array, middle + 1, end);

    return node;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let tree = new Tree([1, 2, 3, 4, 5, 6]);
prettyPrint(tree.root);
