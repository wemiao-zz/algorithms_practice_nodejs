module.exports = class Node {
    constructor(value, parent = null, left = null, right = null) {
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
};
