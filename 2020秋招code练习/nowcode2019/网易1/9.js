// 题目描述
// 小易有一个古老的游戏机，上面有着经典的游戏俄罗斯方块。因为它比较古老，所以规则和一般的俄罗斯方块不同。
// 荧幕上一共有 n 列，每次都会有一个 1 x 1 的方块随机落下，在同一列中，后落下的方块会叠在先前的方块之上，当一整行方块都被占满时，这一行会被消去，并得到1分。
// 有一天，小易又开了一局游戏，当玩到第 m 个方块落下时他觉得太无聊就关掉了，小易希望你告诉他这局游戏他获得的分数。
// 输入描述:
// 第一行两个数 n, m
// 第二行 m 个数，c1, c2, ... , cm ， ci 表示第 i 个方块落在第几列
// 其中 1 <= n, m <= 1000, 1 <= ci <= n
// 输出描述:
// 小易这局游戏获得的分数
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inputArr = []
rl.on('line',line => {
    if(!line) return
    inputArr.push(line.trim())
    if(inputArr.length === 2){
        let n = +inputArr[0].split(' ')[0] //荧幕上共有 n 列
        let m = +inputArr[0].split(' ')[1]//共有m个方块落下
        let block = inputArr[1].split(' ').map(e => +e) //消除方块数组,map遍历转化number
        let res = new Array(n).fill(0)//initial 初始化，n列，每一列初始化为0
        // res[block-1]对应各行数n的值
        for (let i = 0; i < block.length; i++) {
            res[(block[i]-1)] ++
        }
        // 排序a-b 取最小值res[0]即为方块最多消除的行数
        res.sort((a,b)=>{
            return a-b
        })
        console.log(res[0])
    }
})
