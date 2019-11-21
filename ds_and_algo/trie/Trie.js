class TrieNode {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class Trie {
    constructor(words) {
        this.children = new Map();
        for(let word of words) {
            this.insert(word);
        }
    }

    insert(word) {
        let len = word.length;
        if (len === 0) {
            return;
        }
        let cur = this;
        for (let i = 0; i < len; ++i) {
            if (!cur.children.has(word[i])) {
                cur.children.set(word[i], new TrieNode(word[i]));
            }
            cur = cur.children.get(word[i]);
            if (i === len - 1) {
                // mark end nodes
                cur.end = true;
            }
        }
    }

    find(word) {
        let cur = this;
        for (let letter of word) {
            if (cur.children.has(letter)) {
                // recursively go down the tree
                cur = cur.children.get(letter);
            } else {
                // if a character is not found, return false
                return false;
            }
        }
        return cur.end;
    }
}

module.exports = {
    Trie: Trie
};
