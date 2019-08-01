class ContestantNode {
    constructor(name, age, height, weight) {
        this.name = name;
        this.A = age;
        this.H = height;
        this.W = weight;
        this.next = {
            A: null,
            H: null,
            W: null
        };
    }
}

module.exports = class ContestantList {
    constructor() {
        this.head = {
            A: null,
            H: null,
            W: null
        };
    }

    add(name, age, height, weight) {
        let contestant = new ContestantNode(name, age, height, weight);
        if (this.head.A === null || this.head.H === null || this.head.W === null) {
            this.head.A = contestant;
            this.head.H = contestant;
            this.head.W = contestant;
        } else {
            let prev = null;
            let cur = this.head.A;
            while (cur !== null && cur.A < age) {
                prev = cur;
                cur = cur.next.A; 
            }
            if (prev === null) {
                this.head.A = contestant; 
            } else {
                prev.next.A = contestant;  
            }
            contestant.next.A = cur;

            prev = null;
            cur = this.head.H;
            while (cur !== null && cur.H < height) {
                prev = cur;
                cur = cur.next.H; 
            }

            if (prev === null) {
                this.head.H = contestant; 
            } else {
                prev.next.H = contestant;  
            }

            contestant.next.H = cur;

            prev = null;
            cur = this.head.W;
            while (cur !== null && cur.W < weight) {
                prev = cur;
                cur = cur.next.W; 
            }

            if (prev === null) {
                this.head.W = contestant; 
            } else {
                prev.next.W = contestant;  
            }
            contestant.next.W = cur;
        }
    }

    sorted(attribute) {
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
