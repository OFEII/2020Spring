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
var trap = function(h) {
    if(h.length<=0){
       return 0;
    }
    var count=0;
    var maximum=Math.max.apply(Math,h);
    var len=h.length;
    for(var t=0;t<maximum;t++){
        var i=0;
        var j=len-1;
        for(;i<len;i++){
            if(h[i]>t){
                break;
            }
        }
        for(;j>=0;j--){
            if(h[j]>t){
                break;
            }
        }
        count+=j-i+1;
    }
    return count-eval(h.join('+'));
};
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
