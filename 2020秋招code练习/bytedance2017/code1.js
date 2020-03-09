/*头条的2017校招开始了！为了这次校招，我们组织了一个规模宏大的出题团队，
每个出题人都出了一些有趣的题目，而我们现在想把这些题目组合成若干场考试出来，
在选题之前，我们对题目进行了盲审，并定出了每道题的难度系统。
一场考试包含3道开放性题目，假设他们的难度从小到大分别为a,b,c，
我们希望这3道题能满足下列条件：
 
a<=b<=c
b-a<=10
c-b<=10
所有出题人一共出了n道开放性题目。
现在我们想把这n道题分布到若干场考试中（1场或多场，每道题都必须使用且只能用一次），
然而由于上述条件的限制，可能有一些考试没法凑够3道题，
因此出题人就需要多出一些适当难度的题目来让每场考试都达到要求，
然而我们出题已经出得很累了，你能计算出我们最少还需要再出几道题吗？
*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
})

var inputArr = []
var arrin = []
rl.on('line',function (input) {
    inputArr.push(input);

    var nLine = 2;

    if (inputArr.length==(nLine)) {
        arrin.push(inputArr[0].split('').map(Number))
        arrin.push(inputArr[1].split('').map(Number))
        
        var arr = arrin[1];
        arr.sort(function (a,b) {
            return a-b
        })

        var count = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i]-arr[i-1]>10) {
                count += Math.ceil((arr[i]-arr[i-1]))                
            }
        }
        var res = count + arr.length
        if (res%3==0) {
            console.log(count)
            
        }else{
            console.log(count + 3 -(res%3))
        }
        rl.close()
    }
    
})
