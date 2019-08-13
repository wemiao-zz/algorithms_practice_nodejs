'use strict';

const fs = require('fs');

/*
 * Complete the 'longestChain' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 */

function longestChain(words) {
    // Write your code here
    words.sort((a, b) => a.length - b.length);

    let dict = new Set(words);
    let cacheTmp = words.filter((word) => word.length === 1 );

    let cache = cacheTmp.reduce((acc, word) => {
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
    let objMax;
    for (let wrd in cache) {
        if (cache[wrd].count > value) {
            value = cache[wrd].count;
            objMax = wrd;
        }
    }
    let count = 1;
    while (objMax) {
        console.log(objMax + ' ' + count++);
        objMax = cache[objMax].prev;
    }
    console.log(value);
    return value;
}

function main() {
    const ws = fs.createWriteStream('answer.txt');

    const lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input.txt')
    });

    let words = [];
    lineReader.on('line', function (line) {
        words.push(line);
    });

    lineReader.on('close', () => {
        const result = longestChain(words);

        ws.write(result + '\n');

        ws.end();
    });
}

main();
