const Node = require('./Node');
const Trunk = require('./Trunk');
const Queue = require('../queue/queue');

module.exports = class BST {
    constructor(root = null) {
        this.root = root;
    }

    // insert a value into BST
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        insertNode(this.root, value);
    }

    getRoot() {
        return this.root;
    }

    // Recursive function to print binary tree
    // It uses inorder traversal
    printTree(root, parent, isRight)
    {
        if (root === null) {
            return;
        }

        let prev_str = '    ';
        let trunk = new Trunk(parent, prev_str);

        this.printTree(root.right, trunk, true);

        if (parent === null) {
            trunk.text = '---';
        } else if (isRight) {
            trunk.text = '.---';
            prev_str = '   |';
        } else {
            trunk.text = '`---';
            parent.text = prev_str;
        }

        showTrunks(trunk);
        console.log(root.value);

        if (parent !== null)
            parent.text = prev_str;
        trunk.text = '   |';

        this.printTree(root.left, trunk, false);
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

function insertNode(node, value) {
    if (node.value > value) {
        if (node.left === null) {
            node.left = new Node(value, node);
            return;
        }
        insertNode(node.left, value);
    } else if (node.value < value) {
        if (node.right === null) {
            node.right = new Node(value, node);
            return;
        }
        insertNode(node.right, value);
    } else {
        throw new Error('equal node values not implemented yet');
    }
}

// Helper function to print branches of the binary tree
function showTrunks(p)
{
    if (p === null)
        return;

    showTrunks(p.parent);
    process.stdout.write(p.text);
}
