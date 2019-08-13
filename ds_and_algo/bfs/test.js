function bfs(coord1, coord2, maze) {
    let visitArr = [];
    for (let i = 0; i < maze.length; i++) {
        visitArr.push(new Array(maze[i].length).fill(false));
    }

    let workQueue = [];

    workQueue.push({ x: coord1[0], y: coord1[1], distance: 0 });
    let curVal;
    while (workQueue.length > 0) {
        curVal = workQueue.shift();
        console.log(curVal);
        if ( curVal.x === coord2[0] && curVal.y === coord2[1]) {
            return curVal.distance;
        }
        if (curVal.x < 0 || curVal.x === maze.length || curVal.y < 0 || curVal.y === maze[0].length || visitArr[curVal.x][curVal.y] === true || maze[curVal.x][curVal.y] === 1) {
            continue;
        }

        visitArr[curVal.x][curVal.y] = true;
        workQueue.push({ x: curVal.x - 1, y: curVal.y, distance: curVal.distance + 1});
        workQueue.push({ x: curVal.x + 1, y: curVal.y, distance: curVal.distance + 1});
        workQueue.push({ x: curVal.x, y: curVal.y - 1, distance: curVal.distance + 1});
        workQueue.push({ x: curVal.x, y: curVal.y + 1, distance: curVal.distance + 1});
    }
    return -1;
}

console.log(bfs([0, 0], [2, 0], [[0, 0, 0], [1, 1, 1], [0, 0, 0]]));
