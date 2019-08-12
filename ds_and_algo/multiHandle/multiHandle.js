class ContestantNode {
    constructor(name, attributes, validAttributes) {
        this.name = name;
        this.next = {};
        for (let i = 0; i < attributes.length; i++) {
            this[validAttributes[i]] = attributes[i];
            this.next[validAttributes[i]] = null;
        }
    }
}

module.exports = class ContestantList {
    constructor(attributes = [ 'A', 'H', 'W' ]) {
        this.validAttributes = attributes;
        this.head = null;
    }

    add(name, ...attributes) {
        let contestant = new ContestantNode(name, attributes, this.validAttributes);
        if (this.head === null) {
            this.head = {};
            for (let attribute of this.validAttributes) {
                this.head[attribute] = contestant;
            }
        } else {
            let prev, cur;
            for (let attribute of this.validAttributes) {
                prev = null;
                cur = this.head[attribute];
                while (cur !== null && cur[attribute] < attributes[this.validAttributes.indexOf(attribute)]) {
                    prev = cur;
                    cur = cur.next[attribute];
                }
                if (prev === null) {
                    this.head[attribute] = contestant;
                } else {
                    prev.next[attribute] = contestant;
                }
                contestant.next[attribute] = cur;
            }
        }
    }

    sorted(attribute) {
        if (!this.validAttributes.includes(attribute)) {
            throw new Error('not a valid attribute');
        }
        let cur;
        let output = [];
        cur = this.head[attribute];
        while (cur !== null) {
            output.push(cur.name);
            cur = cur.next[attribute];
        }
        return output;
    }
};
