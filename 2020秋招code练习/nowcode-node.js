// 单行输入，nodejs控制台默认输入是字符串类型，若需要数字类型需要进行转化
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inArr = []
rl.on('line', function (input) {
    inArr.push(input)
    inArr.push(line.trim())
    if(inArr.length === 1){
        let n = +inArr[0]
        console.log(n)//转化成数字类型
    }

}); 
// 多行输入：输入第一个数据为接下来要输入的行数
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inArr = []
rl.on('line', line => {
    inArr.push(line)
    let n = +inArr[0]
    if (inArr.length == (n + 1)) {
        let arr = inArr.slice(1)
        console.log(arr)
        inArr = []
    }
})

//xxxxxx
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line',line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){

    }
})