//穷举 旋转四次 判断对角线=>是否为square
const readline = require('readline');
const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let n = -1;
let pos1, pos2, pos3, pos4;
rl.on('line', function(line) {
  lines.push(line.split(" ").map(i => Number(i)));
  if(lines.length === 1) {
    n = Number(lines[0][0]);
  }
  if(lines.length === 4*n+1) {
    for(let i=0; i<n; i++) {
        pos1 = lines[4*i+1];
        pos2 = lines[4*i+2];
        pos3 = lines[4*i+3];
        pos4 = lines[4*i+4];
        console.log(move(pos1, pos2, pos3, pos4));
    }
  }
});
function move(pos1, pos2, pos3, pos4){
    let count = 16;
    let p1, p2, p3, p4;
    for(let j=0;j<4;j++) {
        p1 = rotate(pos1, j);
        for(let k=0;k<4;k++) {
            p2 = rotate(pos2, k);
            for(let l=0;l<4;l++) {
                p3 = rotate(pos3, l);
                for(let m=0;m<4;m++) {
                    p4 = rotate(pos4, m);
                    if(isSquare(p1, p2, p3, p4)) {
                        count = Math.min(count, j+k+l+m);
                    }
                }
            }
        }
    }
    return count === 16 ? -1 : count;
}
function rotate(pos, times) {
    var [a, b, x, y] = pos;
    for(let i=1;i<=times;i++) {
        var temp = a;
        a = y-b+x;
        b = temp-x+y;
    }
    // (a-x, b-y) => (y-b, a-x)
    return [a, b, x, y];
}
function distance(pos1, pos2) {
    return Math.pow(pos1[0]-pos2[0], 2) + Math.pow(pos1[1]-pos2[1], 2);
}
function isSquare(pos1, pos2, pos3, pos4) {
    var q = [distance(pos1, pos2), distance(pos1, pos3), distance(pos1, pos4), distance(pos2, pos3), distance(pos2, pos4), distance(pos3, pos4)];
    q.sort((a, b) => a-b);
    if(q[0] !== 0 && q[0]===q[1] && q[1]===q[2] && q[2]===q[3] && q[4]===q[5] && q[4]===2*q[3]) {
        return true;
    }
    return false;
}