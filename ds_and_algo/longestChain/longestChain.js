'use strict';

module.exports = function longestChain(words) {
    if (words.length === 0) {
        return 0;
    }

    words.sort((a, b) => a.length - b.length);

    const dict = new Set(words);
    let cache = words.filter((word) => word.length === 1 );

    cache = cache.reduce((acc, word) => {
        acc[word] = { count: 1, prev: null };
        return acc;
    }, {});

    words = words.filter((word) => word.length !== 1);

    let check;
    // complexity O(N * avg(length of all words))
    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            check = word.slice(0, i) + word.slice(i + 1, word.length);
            if (dict.has(check)) {
                if (Object.prototype.hasOwnProperty.call(cache, word)) {
                    if (cache[word].count < cache[check].count + 1) {
                        cache[word] = { count: cache[check].count + 1, prev: check };
                    }
                } else {
                    cache[word] = { count: cache[check].count + 1, prev: check };
                }
            }
        }
        if (!Object.prototype.hasOwnProperty.call(cache, word)) {
            cache[word] = { count: 1, prev: null };
        }
    }

    let value = 1;
    for (let wrd in cache) {
        if (cache[wrd].count > value) {
            value = cache[wrd].count;
        }
    }

    return value;
};
