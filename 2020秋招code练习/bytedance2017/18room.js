// 有n个房间，现在i号房间里的人需要被重新分配，分配的规则是这样的：先让i号房间里的人全都出来，接下来按照 i+1, i+2, i+3, ... 的顺序依此往这些房间里放一个人，n号房间的的下一个房间是1号房间，直到所有的人都被重新分配。

// 现在告诉你分配完后每个房间的人数以及最后一个人被分配的房间号x，你需要求出分配前每个房间的人数。数据保证一定有解，若有多解输出任意一个解。

// 递归 动态规划dp
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
var n = -1;
var x;
var rooms = [];
rl.on('line', function multiply(line){
    if (n == -1) {
        var temp = line.split(' ');
        n = Number(temp[0]);
        x = Number(temp[1]);
    } else {
        rooms = line.trim().split(' ');
        var min = Number(rooms[0]);
        for (let i = 0; i < rooms.length; i++) {
            if (Number(rooms[i]) < min) {
                min = Number(rooms[i]);
            }
        }
        rooms = rooms.map(function(item) {return item - min;});
        var count = 0;
        var previous = x;
        while (rooms[previous-1] != 0) {
            rooms[previous-1]--;
            count++;
            previous--;
            if (previous ==0) {
                previous = n;
            }
        } 
        rooms[previous-1] = count + min*n;
        var result = rooms.join(' ');
        console.log(result);
    }
});