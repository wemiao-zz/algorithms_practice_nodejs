const TreeNode = require('./TreeNode');
const helpers = require('./helpers');

module.exports = class BST {
    constructor(root = null) {
        this.root = root;
    }

    // insert a value into BST
    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return;
        }
        helpers.insert(this.root, value);
    }

    // search for a value in BST, will return true/false depending on if value was found
    find(value) {
        return helpers.find(value, this.root);
    }

    // print the tree
    printTree() {
        helpers.printTree(this.root, null, true);
    }

    // in order traversal, returns an array with the elements in order
    inOrder() {
        let arr = [];
        helpers.inOrder(arr, this.root);
        return arr;
    }

    // get the maximum height of this tree (lowest leaf node)
    getHeight() {
        return helpers.getHeight(this.root);
    }

    // check whether BST is balanced (i.e. all height differences between subtrees < 2)
    isBalanced() {
        return helpers.isBalanced(this.root);
    }

    // find common ancestor
    //commonAncestor()
};
