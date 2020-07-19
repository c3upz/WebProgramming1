export class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
};

export class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  insert(val) {
    //console.log(this.root);
    if (this.root === null) {
      this.root = new Node(val);
      return true;
    } else {

      // root exists - not null
      var curr = this.root;

      while (curr) {
        console.log(curr.val);
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = new Node(val);
            break;
          } else
            curr = curr.left;
        } else {
          if (!curr.right) {
            curr.right = new Node(val);
            break;
          } else
            curr = curr.right;
        }
      }
    }
  }
  search(val) {
    if (val) {
      console.log(this);
      var curr = this.root;
      while (curr) {
        if (val == curr.val)
          return true;
        else if (val < curr.val)
          curr = curr.left;
        else
          curr = curr.right;
      }
    }
    return false;
  }
  inorder(fn) {
    var curr = this.root;
    var stack = [];

    while (curr || stack.length > 0) {
      if (curr) {
        stack.push(curr);
        curr = curr.left;
      } else {
        curr = stack.pop();
        //console.log(curr);
        fn(curr.val);
        curr = curr.right;
      }

    }
  }
};
var bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
// bst.insert(7);
// bst.insert(1);
//console.log(bst.search(5));
console.log(bst.root);