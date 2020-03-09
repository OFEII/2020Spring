const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line)
    if(inArr.length === 1){
        let h = inArr[0].split(',').map(item => +item)
        let res = trap(h)
        console.log(res)
    }
})

var trap = function(height) {
    let landArea = 0;
    let maxFromLeft = 0;
    let maxAreaFromLeft = 0;
     
    for (let h of height) {
        landArea += h;
        maxFromLeft = Math.max(maxFromLeft, h);
        maxAreaFromLeft += maxFromLeft;
    }
     
    let maxFromRight = 0;
    let maxAreaFromRight = 0;
     
    for (let i = height.length - 1; i >= 0; i--) {
        maxFromRight = Math.max(maxFromRight, height[i]);
        maxAreaFromRight += maxFromRight;
    }
     
    const boundingArea = height.length * maxFromLeft;
    const leftVoid = boundingArea - maxAreaFromLeft;
    const rightVoid = boundingArea - maxAreaFromRight;
    return boundingArea - leftVoid - rightVoid - landArea;
};