// stack with O(1) max implementation

// code up a heap with an array implementation
function kClosest(stars, k) {
    let cur;
    let arr = new Array(k);
    arr.fill(1000000000,0,k);
    for(let i = 0; i < 100000; i++) {
        cur = calculateDistance(stars.next());
        if (cur < arr[arr.length - 1]) {
            arr[arr.length - 1] = cur;
            arr.sort((a,b) => a - b);
        }
    }
    return arr;
}

function* makeStars() {
    while(true) {
        yield([getRandomInt(1000), getRandomInt(1000),getRandomInt(1000)]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function calculateDistance({value: [x,y,z]}) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}

console.log(kClosest(makeStars(), 20));

