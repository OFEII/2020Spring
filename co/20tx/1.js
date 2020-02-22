// 小Q想要给他的朋友发送一个神秘字符串，但是他发现字符串的过于长了，于是小Q发明了一种压缩算法对字符串中重复的部分进行了压缩，对于字符串中连续的m个相同字符串S将会压缩为[m|S](m为一个整数且1<=m<=100)，例如字符串ABCABCABC将会被压缩为[3|ABC]，现在小Q的同学收到了小Q发送过来的字符串，你能帮助他进行解压缩么？ 

// 输入描述:
// 输入第一行包含一个字符串s，代表压缩后的字符串。
// S的长度<=1000;
// S仅包含大写字母、[、]、|;
// 解压后的字符串长度不超过100000;
// 压缩递归层数不超过10层;

// 输出描述:
// 输出一个字符串，代表解压后的字符串。

// 输入例子1:
// HG[3|B[2|CA]]F

// 输出例子1:
// HGBCACABCACABCACAF

// 例子说明1:
// HG[3|B[2|CA]]F−>HG[3|BCACA]F−>HGBCACABCACABCACAF
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line=>{
    if(!line) return
    inArr.push(line.trim())
    if(inArr.length === 1){
        const reg1 = /\[\d+\|[A-Z]*\]/ //[num/(A-Z)*]
        const reg2 = /\|/  // |
        let str = inArr[0] //inArr str
        while(true){
            let res = reg1.exec(str)
            if(!res) {
                break
            }
            let index = res.index
            let before = str.slice(0,index)
            let midIndex = reg2.exec(res[0]).index+index
            let midNum = str.slice(index+1, midIndex)
            let midStr = str.slice(midIndex+1,index+res[0].length-1)
            let after = str.slice(index+res[0].length)
            let mid = ''
            for(let i = 0;i<midNum;i++){
                mid += midStr 
            }
            str= before+mid+after   
        }
        console.log(str)
    }
})