// 农场有n只鸡鸭排为一个队伍，鸡用“C”表示，鸭用“D”表示。当鸡鸭挨着时会产生矛盾。需要对所排的队伍进行调整，使鸡鸭各在一边。每次调整只能让相邻的鸡和鸭交换位置，现在需要尽快完成队伍调整，你需要计算出最少需要调整多少次可以让上述情况最少。例如：CCDCC->CCCDC->CCCCD这样就能使之前的两处鸡鸭相邻变为一处鸡鸭相邻，需要调整队形两次。
//要么鸡全在左边，要么鸭全在左边，记录当前顺序变到这两种情况的移动次数，取较小值即可
// 注：若某鸡的下标为i  其左边还有cnt只鸡  则最少需要i - cnt次才能将其移到左鸡堆的最右边

//v8
// let line = "CCDCC"
let line = readline()
let inArr = line.split('')
let cntC = 0,
    cntD = 0,
    numC = 0,
    numD = 0
for (let i = 0; i < inArr.length; i++) {
    if(inArr[i] === 'C'){
        cntC += (i-numC)
        numC ++
    }
}
for (let i = 0; i < inArr.length; i++) {
    if(inArr[i] === 'D'){
        cntD += (i-numD)
        numD ++
    }
}
console.log(Math.min(cntC,cntD))

// node
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
rl.on('line',line=>{
    if(!line) return
    let inArr=line.trim().split('')
    let cntC = 0,
        cntD = 0,
        numC = 0,
        numD = 0,
        res
    for (let i = 0; i < inArr.length; i++) {
        if(inArr[i] === 'C'){
            cntC += (i-numC)
            numC ++
        }
    }
    for (let i = 0; i < inArr.length; i++) {
        if(inArr[i] === 'D'){
            cntD += (i-numD)
            numD ++
        }
    }
    res = Math.min(cntC,cntD)
    console.log(res)
})