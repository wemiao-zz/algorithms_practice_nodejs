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

    nextlargest(node) {
        if (node === null) {
            return;
        }
        return this.helperLargest(node, node.value, Number.MAX_SAFE_INTEGER);
    }

    helperLargest(node, target, diff) {
        if (node === null) {
            return;
        }

        if (node.parent !== null && node.parent.value > target) {
            let curDiff = node.parent.value - target;
            if (curDiff < diff) {
                this.helperLargest(node.parent, target, diff);
            }
        }
        if (node.right !== null && node.right.value > target) {
            let curDiff = node.right.value - target;
            if (curDiff < diff) {
                this.helperLargest(node.right, target, diff);
            }
        }
        if (diff === Number.MAX_SAFE_INTEGER) {
            return null;
        } else {
            return target + diff;
        }
    }
};
